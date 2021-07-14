export const visualMap = [
  {
    show: true,
    type: 'piecewise',
    min: 0, //最小值
    max: 100, //最大值
    splitNumber: 4,
    // categories: ['严重污染', '轻度污染', '重度污染', '中度污染'],
    // text:['111','222',],
    // showLabel:false
    // itemGap:30
    itemSymbol: 'pin',
  },
]


export const wjx = {
  type: 'scatter',
  name: '五角星',
  coordinateSystem: 'geo',
  // color: 'rgba(255,0,0)',
  itemStyle: {
    color: '#f00',
  },

  symbolSize: 16, //点的大小
  symbol: `path://M1077.529145 388.206248C1072.06379 371.533456 1056.511742 360.326019 1039.008769 360.326019L686.956883 360.326019 578.161726 27.824884C572.876243 11.207437 557.37954 0 539.765877 0 522.262904 0 506.710856 11.207437 501.370028 27.700357L392.450343 360.326019 40.467639 360.326019C22.909321 360.326019 7.398781 371.533456 2.002608 388.206248-3.462747 404.713004 2.528389 422.963139 16.682967 433.119014L301.504067 638.533348 192.764255 971.214355C187.243555 987.776457 193.234691 1005.860556 207.444614 1016.127121 221.474665 1026.338342 240.845544 1026.338342 254.944776 1016.127121L539.765877 810.588261 824.642322 1016.127121C831.629675 1021.191223 839.972989 1023.820128 848.371649 1023.820128 856.701127 1023.820128 865.099787 1021.191223 872.142485 1016.127121 886.297062 1005.860556 892.288199 987.776457 886.767498 971.214355L778.138377 638.533348 1062.793441 433.119014C1076.934183 422.963139 1082.869974 404.713004 1077.529145 388.206248Z`,
  label: '湘雅2',
  data: [
    {
      name: '长沙',
      value: [112.954094, 28.237181],
    },
  ],
  label: {
    text: '长沙市',
    show: true,
    position: 'bottom',
    fontSize: 10,
    formatter: (...params) => {
      return '中南大学湘雅二医院';
    },
  },
}


export const eightCore = {
  type: 'scatter',
  coordinateSystem: 'geo',
  symbol: "circle", //点的样式
  itemStyle: {
    color: '#fff209',
  },
  data: [
    {
      value: [123.957548, 47.384783],
      name: '齐齐哈尔医学院',
    },
  ],
}