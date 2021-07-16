import { eightColor, TFcolor } from "../../../../db/chart/config";
import eightCore from "../../../../db/chart/eightCore";
import { getCirleSerise, getLineSerise } from "../../../../db/chart/tool";
import TFdata from "../../../../db/chart/twentyFive";

const MAIN = {
  name: '中南大学湘雅二医院',
  coord: [112.954094, 28.237181]
}

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
];

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
      name: MAIN.name,
      value: MAIN.coord,
    },
  ],
  label: {

    show: true,
    position: 'bottom',
    fontSize: 10,
    formatter: (item) => {
      return item.name
    },
  },
  zlevel: 3,
};





// ! 八大核心的黄点

export const eightCoreSeries = getCirleSerise({
  list: eightCore,
  color: eightColor
})



// ! 8大核心的连线

export const eightLineSerise = getLineSerise({
  list: eightCore,
  color: eightColor
})


// ! 25单位紫色点
export const TFCircleSeries = getCirleSerise({
  list: TFdata,
  color: TFcolor
})


// ! 25单位紫色线
export const TFLineSeries = getLineSerise({
  list: TFdata,
  color: TFcolor
})

// ! 左侧列表

export const leftList = [
  {
    text: '8家分中心',
  },
  {
    text: '25家核心单位',
  },
  {
    text: '319家基层网络单位',
  },
  {
    text: '覆盖7大区22大省',
  },
  {
    text: '省份覆盖率65%',
  },
  {
    text: '地级市覆盖率65%',
  },
];



export const provSeiers = {
  name: "地图",
  type: "map", //地图种类
  map: "china", //地图类型。
  data: [
    { name: "北京", value: Math.round(Math.random() * 500) },
    { name: "天津", value: Math.round(Math.random() * 500) },
    { name: "上海", value: Math.round(Math.random() * 500) },
    { name: "重庆", value: Math.round(Math.random() * 500) },
    { name: "河北", value: Math.round(Math.random() * 500) },
    { name: "河南", value: Math.round(Math.random() * 500) },
    { name: "云南", value: Math.round(Math.random() * 500) },
    { name: "辽宁", value: Math.round(Math.random() * 500) },
    { name: "黑龙江", value: Math.round(Math.random() * 500) },
    { name: "湖南", value: Math.round(Math.random() * 500) },
    { name: "安徽", value: Math.round(Math.random() * 500) },
    { name: "山东", value: Math.round(Math.random() * 500) },
    { name: "新疆", value: Math.round(Math.random() * 500) },
    { name: "江苏", value: Math.round(Math.random() * 500) },
    { name: "浙江", value: Math.round(Math.random() * 500) },
    { name: "江西", value: Math.round(Math.random() * 500) },
    { name: "湖北", value: Math.round(Math.random() * 500) },
    { name: "广西", value: Math.round(Math.random() * 500) },
    { name: "甘肃", value: Math.round(Math.random() * 500) },
    { name: "山西", value: Math.round(Math.random() * 500) },
    { name: "内蒙古", value: Math.round(Math.random() * 500) },
    { name: "陕西", value: Math.round(Math.random() * 500) },
    { name: "吉林", value: Math.round(Math.random() * 500) },
    { name: "福建", value: Math.round(Math.random() * 500) },
    { name: "贵州", value: Math.round(Math.random() * 500) },
    { name: "广东", value: Math.round(Math.random() * 500) },
    { name: "青海", value: Math.round(Math.random() * 500) },
    { name: "西藏", value: Math.round(Math.random() * 500) },
    { name: "四川", value: Math.round(Math.random() * 500) },
    { name: "宁夏", value: Math.round(Math.random() * 500) },
    { name: "海南", value: Math.round(Math.random() * 500) },
    { name: "台湾", value: Math.round(Math.random() * 500) },
    { name: "香港", value: Math.round(Math.random() * 500) },
    { name: "澳门", value: Math.round(Math.random() * 500) },
    { name: "南海诸岛", value: Math.round(Math.random() * 500) }
  ],
  itemStyle: {
    //地图区域的多边形 图形样式。
    emphasis: {
      //高亮状态下的样试
      label: {
        show: true
      }
    }
  },
  zoom: 1, //放大比例
  label: {
    //图形上的文本标签，可用于说明图形的一些数据信息
    show: true
  }
}