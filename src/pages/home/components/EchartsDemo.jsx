import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china.js';
import styles from '../home.less';
import { eightCore, testLine, wjx } from './testData';

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
        testLine
  

       
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
