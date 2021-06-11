# excel

[![Build Status](https://api.travis-ci.org/FEComponents/excel.svg?branch=main&status=passed)](https://travis-ci.org/FEComponents/excel)
[![NPM Download](https://badgen.net/npm/dm/@fecomponents/excel)](https://www.npmjs.com/package/@fecomponents/excel)
[![NPM Version](https://badge.fury.io/js/%40fe-components%2Fexcel.svg)](https://www.npmjs.com/package/@fecomponents/excel)
[![NPM License](https://badgen.net/npm/license/@fecomponents/excel)](https://github.com/FEComponents/excel/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEComponents/excel/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

纯前端导入导出 excel

## Table of Contents

- [Introduction](#introduction)
- [Install](#install)
- [Usage](#usage)
- [Links](#links)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Introduction

纯前端实现导入导出 excel，经测试，1 万条数据导出，除去网络请求时间，导出的占用时间不超过 3 秒。

- 表格导出
- 带图导出
- 自定义列宽度
- 导出回调

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @fe-components/excel
```

[⬆ Back to Top](#table-of-contents)

## Usage

```vue
<template>
  <el-button
    type="success"
    @click="handleExportExcel"
    style="padding: 8px 20px; cursor: pointer"
  >
    {{ loading ? 'loading...' : 'export-excel' }}
  </el-button>
</template>

<script>
// in real project, you should import function like this
import {exportExcel} from '@fecomponents/excel-it'

export default {
  name: 'StaticJsonExportToExcel',
  data() {
    return {
      loading: false,
      columns: [
        {
          title: '图片',
          minWidth: 70,
          key: 'imgUrl'
        },
        {
          title: '货号',
          minWidth: 100,
          key: 'goodsModel'
        },
        {
          title: 'SPU编码',
          minWidth: 124,
          key: 'goodsNo'
        },
        {
          title: '商品名称',
          minWidth: 180,
          key: 'goodsName'
        },
        {
          title: '品类',
          minWidth: 140,
          key: 'categoryNamePath'
        },
        {
          title: '品牌',
          minWidth: 120,
          key: 'brandNameEn'
        }
      ],
      data: [
        {
          imgUrl: '',
          goodsModel: '123323',
          goodsNo: '22222',
          goodsName: '商品名称',
          categoryNamePath: '品类',
          brandNameEn: 'nike'
        }
      ]
    }
  },
  methods: {
    handleExportExcel() {
      this.loading = true

      /**
       * 受限于 styleguide 无法使用 import
       * 因此在 styleguide 配置已经将
       * `exportExcel` 挂载到 `window`
       */
      exportExcel(
        {
          columns: this.columns, //header
          data: this.data, //list
          filename: 'gameManageList', //文件名称
          sheetName: '游戏管理列表', //sheetName 默认 Sheet1
          imageKeys: [
            //图片key 只有导出含图需要
            {
              name: 'imgUrl',
              imgWidth: '100',
              imgHeight: '100'
            }
          ]
        },
        () => {
          //回调函数
          this.loading = false
        }
      )
    }
  }
}
</script>
```

[⬆ Back to Top](#table-of-contents)

## Links

- [docs](https://FEComponents.github.io/excel/)

[⬆ Back to Top](#table-of-contents)

## Contributing

For those who are interested in contributing to this project, such as:

- report a bug
- request new feature
- fix a bug
- implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/main/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr><td align="center"><a href="https://yuwangi.github.io"><img src="https://static.opechk.com/dist/other/343046650.jpg" width="100px;" alt="" /><br /><sub><b>yuwangi</b></sub></a><br /><a href="https://github.com/FEComponents/cpv-file/commits?author=yuwangi" title="Code">💻</a> <a href="https://github.com/FEComponents/cpv-file/commits?author=yuwangi" title="Documentation">📖</a> <a href="https://github.com/FEComponents/cpv-file/commits?author=yuwangi" title="Tests">⚠️</a> <a href="#translation-yuwangi" title="Translation">🌍</a><a href="https://github.com/FEComponents/cpv-file/issues?q=author%3Ayuwangi" title="Bug reports">🐛</a></td>
  
  </tr>
  
</table>

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
