const provSeiers = {
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



export default provSeiers

