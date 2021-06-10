导出excel，该例子有1w条数据来自接口。

Here shows an example of export 10,000 rows data from api.

```vue
<template>
  <el-button
    type="success"
    @click="handleExportExcel"
    style="padding: 8px 20px; cursor: pointer">
    {{loading ? 'loading...' : 'export-excel'}}
  </el-button>
</template>

<script>
// in real project, you should import function like this
// import { exportExcel } from '@fecomponents/excel-it'

export default {
  name: 'StaticJsonExportToExcel',
  data() {
    return {
      loading: false,
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          key: 'name',
          width: 80,
          render: (h, params) => {
            return h('span', params.index + 1);
          }
        },
        {
          title: '图片',
          minWidth: 70,
          key: 'imgUrl',
          type: 'image',

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
        },

        {
          title: '尺码标准',
          minWidth: 100,
          key: 'sizeTypeName'
        },
        {
          title: '材质',
          minWidth: 100,
          key: 'skuMaterialRaw',
          render: (h, params) => {
            return h(
              'div',
              {
                style: {
                  width: '90px',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis',
                  'white-space': 'nowrap'
                },
                domProps: {
                  title: params.row.skuMaterialRaw
                }
              },
              params.row.skuMaterialRaw
            );
          }
        },
        {
          title: '产地',
          minWidth: 100,
          key: 'skuAreaRaw'
        },

        {
          title: '性别',
          minWidth: 80,
          key: 'sex',
          render: (h, params) => {
            // let sexObj = {
            //   0: '女',
            //   1: '男',
            //   2: '中性',
            //   3: '未知'
            // };
            return h('span', params.row.sexStr);
          }
        },
        {
          title: '商品季节',
          minWidth: 100,
          key: 'season'
        },
        {
          title: '首次订货季节',
          minWidth: 120,
          key: 'purchaseSeason'
        },
        {
          title: '当季季节',
          minWidth: 120,
          key: 'currentSeason'
        },

        {
          title: '创建人',
          minWidth: 120,
          key: 'createUser'
        },
        {
          title: '创建时间',
          minWidth: 120,
          key: 'createTime'
        },
        {
          title: '完善人',
          minWidth: 120,
          key: 'updateUser'
        },
        {
          title: '完善时间',
          minWidth: 120,
          key: 'updateTime'
        },
        {
          title: '状态',
          minWidth: 120,
          key: 'status',
          render: (h, params) => {
            let statusObj = {
              0: '未完善',
              1: '已完善'
            };
            return h('span', statusObj[params.row.status]);
          }
        },
        {
          title: '备注',
          minWidth: 120,
          key: 'comment'
        },
        {
          title: '数据状态',
          align: 'center',
          key: 'dataState',
          minWidth: 100,
          fixed: 'right',
          
        },
      ],
      data: [{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001144","goodsModel":"90004-5","goodsName":"90004-5","brandNameEn":"BURBERRY","categoryNo":"A06B03C02D01","categoryNamePath":"珠宝首饰,女士高级珠宝,金钞,金钞","skuMaterialRaw":" ","skuAreaRaw":"中国|浙江省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"夏","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001143","goodsModel":"90003-5","goodsName":"90003-5","brandNameEn":"BURBERRY","categoryNo":"A07B02C02D01","categoryNamePath":"腕表,女士腕表,女士光动能表,女士光动能表","skuMaterialRaw":" ","skuAreaRaw":"中国|海外","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"冬","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001142","goodsModel":"90002-5","goodsName":"90002-5","brandNameEn":"BURBERRY","categoryNo":"A05B01C02D02","categoryNamePath":"服装,男士服装,男士西服,男士西服上衣","skuMaterialRaw":" ","skuAreaRaw":"中国|云南省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"秋","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"","imgUrlArray":null,"goodsNo":"8500001140","goodsModel":"90001-5","goodsName":"90001-5名称","brandNameEn":"BURBERRY","categoryNo":"A04B03C04D04","categoryNamePath":"配饰,女士服饰,女士丝巾围巾,女士围巾","skuMaterialRaw":"","skuAreaRaw":"中国|山西省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":2000.00,"seaMarketPriceUnit":"EUR","marketPrice":3000.00,"declarationName":"","declarationAmount":0.00,"season":"冬","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"系统创建","updateTime":"2021-06-04 12:09:22","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"http://img-hub.opechk.com/oscs/file/02843796751f8c5d37f5afe9522b2839.png","imgUrlArray":null,"goodsNo":"8500001133","goodsModel":"FZ_SICO_06011445","goodsName":"【测试商品】FZ_SICO_06011445","brandNameEn":"ALEXANDER MCQUEEN","categoryNo":"A05B01C01D04","categoryNamePath":"服装,男士服装,男士上衣,男士T恤","skuMaterialRaw":"棉","skuAreaRaw":"中国|海南省","shelfLife":"","shelfLifeUnit":"","purchasePrice":132.00,"purchasePriceUnit":"","seaMarketPrice":100.00,"seaMarketPriceUnit":"HKD","marketPrice":123.00,"declarationName":"123","declarationAmount":12.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"liushaohua","updateTime":"2021-06-04 11:43:21","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":"<p><img src=\"http://img-hub.opechk.com/supplier-goods/2f7b1389d27fa2a0ac1fef99d39ee44c.png\" style=\"max-width:100%;\"><br></p>"},{"imgUrl":"http://img-hub.opechk.com/supplier-goods/fb0fdf6375309920da5abd1b2c9e3494.png","imgUrlArray":null,"goodsNo":"8500001127","goodsModel":"XB20201052802","goodsName":"【测试商品】XB20201052802","brandNameEn":"FURLA","categoryNo":"A08B02C01D01","categoryNamePath":"箱包,女士箱包,女士单肩包,女士单肩包","skuMaterialRaw":"XB20201052802","skuAreaRaw":"奥兰群岛","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"HKD","marketPrice":1.00,"declarationName":"","declarationAmount":0.00,"season":"冬","currentSeason":"","purchaseSeason":"","sex":3,"natureCategory":"","exstandard":"","securityCategory":"","isBroken":2,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"供价生效","createUser":"admin","updateTime":"2021-06-04 11:01:00","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P1059","sizeTypeName":"腰包尺码","chicun":null,"descPc":""},{"imgUrl":"","imgUrlArray":null,"goodsNo":"8500001139","goodsModel":"90002-4","goodsName":"90002-4名称","brandNameEn":"BURBERRY","categoryNo":"A01B01C01D01","categoryNamePath":"生活家居,厨房用品,茶具,茶具","skuMaterialRaw":" 顶顶顶顶","skuAreaRaw":"中国|浙江省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":10000.00,"seaMarketPriceUnit":"EUR","marketPrice":2000.00,"declarationName":"","declarationAmount":0.00,"season":"夏","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"系统创建","updateTime":"2021-06-04 10:57:16","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"","imgUrlArray":null,"goodsNo":"8500001137","goodsModel":"90001-4","goodsName":"test90001-4","brandNameEn":"BURBERRY","categoryNo":"A02B01C01D01","categoryNamePath":"儿童,儿童配饰,儿童服饰,儿童领带/结","skuMaterialRaw":" 阿斯蒂芬","skuAreaRaw":"阿富汗","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1200.00,"seaMarketPriceUnit":"EUR","marketPrice":2000.00,"declarationName":"","declarationAmount":0.00,"season":"夏","currentSeason":"20SS","purchaseSeason":"20SS","sex":1,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"g","weight":0.0,"weightUnit":"g","packageSpec":"","updateUser":"商品编辑队列","createUser":"系统创建","updateTime":"2021-06-04 09:50:48","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":"<p>订单到</p>"},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001136","goodsModel":"90001-1","goodsName":"","brandNameEn":"BURBERRY","categoryNo":"A04B01C01D01","categoryNamePath":"配饰,男士服饰,男士领结领带,男士领带","skuMaterialRaw":"","skuAreaRaw":"阿富汗","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":0,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001135","goodsModel":"90004-2","goodsName":"","brandNameEn":"BURBERRY","categoryNo":"A04B03C04D04","categoryNamePath":"配饰,女士服饰,女士丝巾围巾,女士围巾","skuMaterialRaw":"","skuAreaRaw":"中国|海南省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":0,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"http://img-hub.opechk.com/supplier-goods/72fa2c1853ce68dd7d805b89fda1878d.png","imgUrlArray":null,"goodsNo":"8500001134","goodsModel":"HZ202106021649","goodsName":"【测试商品】HZ202106021649","brandNameEn":"DIOR","categoryNo":"A03B06C01D01","categoryNamePath":"美妆护肤,女士彩妆用品,女士彩妆套装,女士彩妆套装","skuMaterialRaw":"水","skuAreaRaw":"中国|云南省","shelfLife":"","shelfLifeUnit":"","purchasePrice":1.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"EUR","marketPrice":1.00,"declarationName":"1","declarationAmount":1.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"liushaohua","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"","sizeTypeName":null,"chicun":null,"descPc":""},{"imgUrl":"http://img-hub.opechk.com/oscs/file/fcf3f349c01bc74078ec9148f31a9fe3.png","imgUrlArray":null,"goodsNo":"8500001092","goodsModel":"XB202105101031","goodsName":"【测试商品】S级XB202105101031","brandNameEn":"FURLA","categoryNo":"A08B02C01D01","categoryNamePath":"箱包,女士箱包,女士单肩包,女士单肩包","skuMaterialRaw":"棉","skuAreaRaw":"奥兰群岛","shelfLife":"","shelfLifeUnit":"","purchasePrice":10.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"EUR","marketPrice":10.00,"declarationName":"10","declarationAmount":10.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"liushaohua","updateTime":"2021-06-02 14:19:39","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P1059","sizeTypeName":"腰包尺码","chicun":null,"descPc":"<p><img src=\"http://img-hub.opechk.com/oscs/file/b9c86c89a831f75637f380a21eeb2e34.jpg\" style=\"max-width:100%;\"><br></p>"},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001132","goodsModel":"90002-1","goodsName":"90002-1","brandNameEn":"BURBERRY","categoryNo":"A08B01C01D01","categoryNamePath":"箱包,男士箱包,男士单肩包,男士单肩包","skuMaterialRaw":"","skuAreaRaw":"中国|云南省","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"EUR","marketPrice":1.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"夏","purchaseSeason":"","sex":3,"natureCategory":"","exstandard":"","securityCategory":"","isBroken":2,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"liushaohua","updateTime":null,"status":0,"baseInfoStatus":0,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":null,"imgUrlArray":null,"goodsNo":"8500001130","goodsModel":"DMZ014-US001-062012-BLUE","goodsName":"13DE MARZO","brandNameEn":"13 DE MARZO","categoryNo":"A05B01C01D01","categoryNamePath":"服装,男士服装,男士上衣,男士卫衣/帽衫","skuMaterialRaw":"","skuAreaRaw":"意大利","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":0.00,"seaMarketPriceUnit":"HKD","marketPrice":0.00,"declarationName":"","declarationAmount":0.00,"season":"夏","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":0,"isImg":0,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"http://img-hub.opechk.com/oscs/file/a3e6a8fa18961db972d58dc2ce13ae1a.png","imgUrlArray":null,"goodsNo":"8500001129","goodsModel":"TEST202105311429","goodsName":"测试202105311429","brandNameEn":"FURLA","categoryNo":"A08B01C01D01","categoryNamePath":"箱包,男士箱包,男士单肩包,男士单肩包","skuMaterialRaw":" ","skuAreaRaw":"中国|海外","shelfLife":"","shelfLifeUnit":"","purchasePrice":1.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"HKD","marketPrice":111.00,"declarationName":"1","declarationAmount":1.00,"season":"冬","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"供价生效","createUser":"系统创建","updateTime":"2021-05-31 14:36:01","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"https://www.lfmall.co.kr/product.do?cmd=getProductDetail&PROD_CD=I718XX02748&af=GS01&utm_source=pc_shopping.google&utm_medium=cpc&utm_campaign=sale","imgUrlArray":null,"goodsNo":"8500001128","goodsModel":"XB_20210529_1103","goodsName":"FURLA 测试加工价格使用","brandNameEn":"FURLA","categoryNo":"A08B02C01D01","categoryNamePath":"箱包,女士箱包,女士单肩包,女士单肩包","skuMaterialRaw":"尼龙","skuAreaRaw":"意大利","shelfLife":"","shelfLifeUnit":"","purchasePrice":1103.00,"purchasePriceUnit":"RMB","seaMarketPrice":1103.00,"seaMarketPriceUnit":"RMB","marketPrice":1103.00,"declarationName":"男士腰包","declarationAmount":0.00,"season":"四季","currentSeason":"夏","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"系统创建","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"http://img-oscs.opechk.com/good_img/5399120d063f646e7ad4a91c55087393.png","imgUrlArray":null,"goodsNo":"8500001043","goodsModel":"XB20210323001","goodsName":"【测试商品】经销XB20210323001","brandNameEn":"FURLA","categoryNo":"A08B02C01D01","categoryNamePath":"箱包,女士箱包,女士单肩包,女士单肩包","skuMaterialRaw":"棉,8500001043477","skuAreaRaw":"阿富汗,奥兰群岛","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":111.00,"seaMarketPriceUnit":"EUR","marketPrice":111.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":null,"natureCategory":"","exstandard":null,"securityCategory":null,"isBroken":0,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"供价生效","createUser":"liushaohua","updateTime":"2021-05-28 14:43:00","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":"<p><img src=\"http://img-oscs.opechk.com/good_img/cbfcdb7db8064d0cc294602201341356.png\" style=\"max-width:100%;\"><br></p>"},{"imgUrl":"http://img-hub.opechk.com/supplier-goods/6767757a97c46a9a9f524e87341eee17.jpg","imgUrlArray":null,"goodsNo":"8500001119","goodsModel":"11111","goodsName":"【门户测试0520-004】","brandNameEn":"3CE","categoryNo":"A02B06C01D01","categoryNamePath":"儿童,女童服装,女童上衣,女童T恤","skuMaterialRaw":"棉","skuAreaRaw":"阿尔巴尼亚","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"RMB","marketPrice":1.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":3,"natureCategory":"","exstandard":"","securityCategory":"","isBroken":2,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"admin","updateTime":"2021-05-28 10:44:58","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10417","sizeTypeName":"Canada Goose童装尺码","chicun":null,"descPc":"<p><label>商品描述PC</label></p><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\"><label>商品描述PC</label><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\"><br><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\"><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\"><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\"><div><diveditor-wrapper\"><div id=\"editor15869\"><div id=\"toolbar-elem600576407396588\">&nbsp; &nbsp;&nbsp;<br></div></div></diveditor-wrapper\"></div></div></div></diveditor-wrapper\"></div></div></div></diveditor-wrapper\"></div></div></div></diveditor-wrapper\"></div></div></div></diveditor-wrapper\"></div></div></div></diveditor-wrapper\"></div>"},{"imgUrl":"http://img-hub.opechk.com/supplier-goods/64abf1e25de3728f687e40bc99e508a9.jpg","imgUrlArray":null,"goodsNo":"8500001125","goodsModel":"000000000","goodsName":"[门户创建0524-001]","brandNameEn":"13 DE MARZO","categoryNo":"A04B01C02D02","categoryNamePath":"配饰,男士服饰,男士帽子,男士毛线帽","skuMaterialRaw":"棉质","skuAreaRaw":"阿尔巴尼亚","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"","marketPrice":1.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":3,"natureCategory":"","exstandard":"","securityCategory":"","isBroken":2,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"","createUser":"admin","updateTime":null,"status":0,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":0,"comment":"","dataState":1,"sizeType":"P10369","sizeTypeName":"国际码","chicun":null,"descPc":""},{"imgUrl":"http://img-hub.opechk.com/supplier-goods/db70a240d1c743951843bce2c1363cd9.jpg","imgUrlArray":null,"goodsNo":"8500001120","goodsModel":"000000","goodsName":"【门户测试-0520-005】","brandNameEn":"13 DE MARZO","categoryNo":"A09B02C04D01","categoryNamePath":"鞋靴,女士鞋靴,女士雨鞋,女士雨鞋","skuMaterialRaw":"皮","skuAreaRaw":"乍得","shelfLife":"","shelfLifeUnit":"","purchasePrice":0.00,"purchasePriceUnit":"","seaMarketPrice":1.00,"seaMarketPriceUnit":"EUR","marketPrice":1.00,"declarationName":"","declarationAmount":0.00,"season":"春","currentSeason":"","purchaseSeason":"","sex":3,"natureCategory":"","exstandard":"","securityCategory":"","isBroken":2,"grossWeight":0.00,"grossWeightUnit":"","weight":0.0,"weightUnit":"","packageSpec":"","updateUser":"商品编辑队列","createUser":"admin","updateTime":"2021-05-21 18:14:46","status":1,"baseInfoStatus":1,"isImg":1,"isSupplyPrice":1,"comment":"","dataState":1,"sizeType":"P10371","sizeTypeName":"意码 IT","chicun":null,"descPc":""}]
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
      exportExcel({
        columns: this.columns,
        data: this.data,
        filename: 'gameManageList',
        sheetName: '游戏管理列表',
        imageKeys: [
          {
            name: 'imgUrl',
            imgWidth: '100',
            imgHeight: '100'
          }
        ]
    }, () => {
            this.loading = false
    })
       
    }
  }
}
</script>
```
