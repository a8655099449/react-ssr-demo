import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china.js';
import styles from '../home.less';
import { eightCore, wjx } from './testData';

function EchartsDemo() {
  const drawChart = () => {
    console.log('👴2021-07-14 17:02:41 EchartsDemo.jsx line:13', wjx);

    const china = echarts.init(ref.current);
    // ! 八家分中心
    china.setOption({
      backgroundColor: '#fff', //地图背景色
      geo: {
        map: 'china',
        // roam: 'move', // 开启缩放和拖拽
        // center: [115.97, 29.71], // 地图中心点
        aspectScale: 1,
        nameMap: {
          china: '中国',
        },
        label: {
          normal: {
            // show: true,
            color: '#fff',
          },
          emphasis: {
            //选中省份的颜色
            // areaColor: '#f00',
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            // & 未选中省份的颜色
            areaColor: '#139adc', // 地图的颜色
          },
          emphasis: {
            // & 选中时的样式
            areaColor: '#102f7d',
          },
        },
      },

      series: [
        wjx, // 中心的红色五角星
        eightCore,
        {
          type: 'line',
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol:
              'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbolSize: 15,
          },
          data: [
            {
              coords: [
                [112.954094, 28.237181],
                [123.957548, 47.384783],
              ],
              fromName: '长沙',
              toName: '齐齐哈尔',
            },
          ],
          lineStyle: {
            color: '#46bee9',
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          zlevel: 2,
        },
      ],
    });
  };

  const ref = useRef();

  useEffect(() => {
    drawChart();
  }, []);
  return (
    <div>
      <div
        id="myChartChina"
        style={{
          width: '100%',
          height: 500,
        }}
        ref={ref}
      ></div>
    </div>
  );
}

const EchartsLayout = props => {
  let { item } = props;
  return (
    <div className={`${styles['w']} container`}>
      <div className={`${styles['map-warp']}`}>
        <EchartsDemo />
      </div>
    </div>
  );
};
export default EchartsLayout;
