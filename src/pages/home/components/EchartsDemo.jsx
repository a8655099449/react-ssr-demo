import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china.js';

export default function EchartsDemo() {
  const drawChart = () => {
    const china = echarts.init(ref.current);

    china.setOption({
      backgroundColor: '#1c2431', //地图背景色
      geo: {
        map: 'china',
        roam: true, // 开启缩放和拖拽
        // center: [115.97, 29.71], // 地图中心点
        aspectScale: 1,
        nameMap: {
          china: '中国',
        },
        label: {
          normal: {
            postion: 'bottom',
            show: true,
            color: '#000',
          },
          emphasis: {
            //选中省份的颜色
            areaColor: '#f00',
            color: '#f00',
          },
        },
        itemStyle: {
          areaColor: '#0ec', // 地图的颜色
        },
      },
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
          height: 710,
        }}
        ref={ref}
      ></div>
    </div>
  );
}
