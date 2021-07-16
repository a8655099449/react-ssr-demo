
const MAIN = {
  name: '中南大学湘雅二医院',
  coord: [113.000469,28.193576]
}


/* 
! 数据格式
[
  {
    value: [123.957548, 47.384783],
    name: '齐齐哈尔医学院',
  },
],
*/
const getCirleSerise = ({ list, color }) => {
  return {
    type: 'scatter',
    coordinateSystem: 'geo',
    symbol: 'circle', //点的样式
    itemStyle: {
      color: color,
    },
    data: list.map(item => ({
      value: item.coord,
      name: item.name,
    })),

    label: {
      show: false,
      position: 'bottom',
      fontSize: 10,
      formatter: (params) => {
        return params.name;
      },
    },
    zlevel: 3,
  };

}
/* 
! 数据格式
{
  fromName: '上海',
  toName: '包头',
  coords: [
    [112.954094, 28.237181],
    [123.957548, 47.384783],
  ],
}, */

// ! 获得圆点的函数
const getLineSerise = ({ list, color }) => {

  return {
    data: list.map(item => {
      return {
        fromName: MAIN.name,
        toName: item.name,
        coords: [
          MAIN.coord,
          item.coord,
        ],
      }
    }),

    effect: {
      show: false,
      period: 6,
      trailLength: 0,
      symbol: 'circle',
      symbolSize: 15,
    },
    lineStyle: {
      color: color,
      width: 1,
      opacity: 1,
      curveness: 0.2,
    },
    symbol: ['none', 'none'],
    symbolSize: 10,
    type: 'lines',
    zlevel: 2,
  };
}
export {
  getCirleSerise, getLineSerise

}