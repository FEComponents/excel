// 来源于@FEMessage/excel-it 有改动

// import FileSaver from 'file-saver'
import Excel from 'exceljs'
/**
 * 将字符串转字符流
 * @param str 需要转换的字符串
 * @return {ArrayBuffer}
 */
function s2ab(str) {
  const buf = new ArrayBuffer(str.length)
  let view = new Uint8Array(buf)
  for (let i = 0; i !== str.length; ++i) {
    view[i] = str.charCodeAt(i) & 0xff
  }
  return buf
}

function getIndexByKey(columns, name) {
  let _index = 0
  columns.forEach((elem, index) => {
    if (elem.key === name) {
      _index = index
    }
  })
  return _index
}
function validUrl(url) {
  return /http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(
    url
  )
}
// 设置图片大小
function getImageList(imageKeys, data, columns) {
  return imageKeys.map(key =>
    data.map((item, index) => ({
      key,
      url: item[key.name],
      col: getIndexByKey(columns, key.name) + 1,
      row: index + 2,
      width: key.imgWidth,
      height: key.imgHeight
    }))
  )
}

function base64ToBrowser(buffer) {
  return window.btoa(
    [].slice
      .call(new Uint8Array(buffer))
      .map(function(bin) {
        return String.fromCharCode(bin)
      })
      .join('')
  )
}

function imageToBase64Browser(urlOrImage, param) {
  if (!('fetch' in window && 'Promise' in window)) {
    return Promise.reject(
      '[*] image-to-base64 is not compatible with your browser.'
    )
  }
  return fetch(urlOrImage, param || {})
    .then(function(response) {
      return response.arrayBuffer()
    })
    .then(base64ToBrowser)
}

// 添加图片到sheet
async function addPicToSheet(imageList, imageKeys, workbook, worksheet) {
  if (imageKeys.length > 0) {
    await Promise.all(
      imageList.map(async imgArr => {
        return await Promise.all(
          imgArr.map(item => {
            const {url, width, height, row, col} = item
            // 因为有的图片是不存在的需要判断
            if (url && validUrl(url)) {
              return imageToBase64Browser(url) // Image URL
                .then(base64Img => {
                  const imgType = url
                    .split('?')[0]
                    .substring(url.split('?')[0].lastIndexOf('.') + 1)
                    .toLowerCase()

                  const id = workbook.addImage({
                    base64: base64Img,
                    extension: imgType
                  })

                  worksheet.addImage(id, {
                    tl: {col: col - 1, row: row - 1},
                    ext: {width, height}
                  })
                  worksheet.getRow(row).height = height * 0.75
                  // // 去掉背景链接
                  worksheet.getRow(row).getCell(item.key.name).value = ''
                })
                .catch(error => {
                  console.log('error>>>>>>>>>>>>>>>>>>>>>', error) //
                })
            }
            return item
          })
        )
      })
    )
  }
}
/**
 * 将json转换为字符串
 * @param { Object } config 传入的excel对象
 * @param { Array } config.data excel的数据
 * @param { String } config.filename excel文件名
 * @param { Array } config.columns excel的头部
 * @param { String } config.sheetName 表名
 * @param { Array } config.imageKeys 需要转化图片的key
 * @param { String } config.creator 创建表的人
 * @param { String } config.lastModifiedBy 最后修改表的人
 * @param { String } config.imageKeys.imgWidth 图片的宽度
 * @param { String } config.imageKeys.imgHeight 图片的高度
 * * @param { Function } callback 回调
 */
export async function exportExcel(
  {
    data = [],
    filename = 'file',
    columns,
    sheetName = 'sheet1',
    imageKeys = [],
    creator = 'me',
    lastModifiedBy = 'her'
  },
  callback = () => {}
) {
  const defaultViews = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: 'visible'
    }
  ]
  const fontName = 'Arial Unicode MS'
  const font = {name: fontName, family: 4, size: 12}
  const fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: {argb: 'f8f8f8'}
  }
  const border = {style: 'thin', color: {argb: 'cccccc'}}

  columns = columns.map(row => {
    return {
      ...row,
      width: row.minWidth ? row.minWidth / 8 : 10,
      columns: row.title ? row.title : row.label
    }
  })

  const workbook = new Excel.Workbook()
  // 设置属性 -创建着以及最后修改的人
  workbook.creator = creator
  workbook.lastModifiedBy = lastModifiedBy

  // 时间获取一次就好
  const now = new Date()
  workbook.created = now
  workbook.modified = now
  workbook.lastPrinted = now
  const worksheet = workbook.addWorksheet(sheetName)
  // 设置打开时候的视图-设置位置
  workbook.views = defaultViews
  // 使工作表可见
  worksheet.state = 'visible'
  worksheet.columns = columns

  for (let i = 1; i <= columns.length; i++) {
    worksheet.getColumn(i).alignment = {
      vertical: 'middle',
      horizontal: 'left'
    }
    worksheet.getColumn(i).font = {name: 'Arial Unicode MS'}
  }

  worksheet.addRows(data)

  if (imageKeys && imageKeys.length > 0) {
    // 处理图片
    const imageList = getImageList(imageKeys, data, columns)

    // 添加图片到sheet
    await addPicToSheet(imageList, imageKeys, workbook, worksheet)
  }
  // 多级表头
  const columnsOPtion = columns.filter((item, index) => {
    if (item.type && item.type === 'multi') {
      columns.splice(index, 1)
      return item
    }
    return item.type && item.type === 'multi'
  })

  // 多级表头重置设置表头
  if (columnsOPtion.length) {
    columnsOPtion[0].columnsText.forEach((text, index) => {
      const borderAttr = {
        top: border,
        left: border,
        bottom: border,
        right: border,
        index
      }
      const columnsAttr = [
        {
          attr: 'values',
          value: text
        },
        {
          attr: 'font',
          value: font
        },
        {
          attr: 'fill',
          value: fill
        },
        {
          attr: 'border',
          value: borderAttr
        }
      ]
      columnsAttr.map(item => {
        worksheet.getRow(index + 1)[item.attr] = item.value
        return worksheet
      })
    })
    columnsOPtion[0].mergeOption.forEach(merge => {
      worksheet.mergeCells(merge)
    })
  } else {
    // 设置表头样式
    worksheet.getRow(1).font = font
    worksheet.getRow(1).fill = fill
    worksheet.getRow(1).height = 40
  }

  const bufferContent = await workbook.xlsx.writeBuffer()

  // 设置
  // ctx.set("Content-disposition", `attachment;filename=${filename}.xlsx`);
  // 返回文件buffer
  // ctx.body = bufferContent;

  let url = window.URL.createObjectURL(
    new Blob([bufferContent], {
      type: 'application/vnd.ms-excel;charset=utf-8'
    })
  )
  // 生成一个a标签
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  // 生成时间戳
  // let timestamp = new Date().getTime();
  // link.download = timestamp + '.xlsx';
  document.body.appendChild(link)
  link.click()

  // FileSaver.saveAs(
  //   new Blob([s2ab(bufferContent)], {type: 'application/octet-stream'}),
  //   fileName + '.xlsx'
  // )
  callback()
}

/**
 * 兼容模拟点击 兼容Firefox 47.0.2 and 62.0.2.
 * @param node dom节点
 */
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    const evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    )
    node.dispatchEvent(evt)
  }
}
