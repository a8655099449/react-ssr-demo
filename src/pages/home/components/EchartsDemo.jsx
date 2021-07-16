import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import './provincesMap';
import styles from '../home.less';
import {
  eightCoreSeries,
  eightLineSerise,
  wjx,
  TFCircleSeries,
  TFLineSeries,
} from './testData';
import useHooks, { Context, getContxet } from './hooks';

function EchartsDemo() {
  const { handleMapMove } = getContxet();

  const drawChart = () => {
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
        eightCoreSeries,
        eightLineSerise,
        TFCircleSeries,
        TFLineSeries,
        // {
        //   type: 'map',
        //   mapType: '西藏',
        //   zlevel: 4,
        //   zoom:0.2,
        //   left:'auto'
        // },
      ],
      tooltip: {
        show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。
        trigger: 'item', //触发类型。item,axis,none
        enterable: true, //鼠标是否可进入提示框浮层中，默认为false，
        showContent: true, //是否显示提示框浮层
        triggerOn: 'mousemove', //提示框触发的条件(mousemove|click|none)
        showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
        textStyle: {
          color: 'white',
          fontSize: 12,
        },

        alwaysShowContentL: false,
        padding: [0, 8],
        position: 'top',
        hideDelay: 10, //浮层隐藏的延迟
        formatter: o => {
          return o.name;
        },

        backgroundColor: 'rgba(0,0,0,.3)', //提示框浮层的背景颜色。
        transitionDuration: 1, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      },
    });

    china.on('mousemove', handleMapMove);
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
  const hooks = useHooks();
  return (
    <Context.Provider
      value={{
        ...hooks,
      }}
    >
      <div className={`${styles['w']}`}>
        <div className={`${styles['map-warp']}`}>
          <EchartsDemo />
          <ProvincesMap />
          <HandleList />
        </div>
      </div>
    </Context.Provider>
  );
};

const listOptions = [
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

const HandleList = () => {
  const { leftList, leftListIndex, handleLeftList } = getContxet();

  return (
    <div className={`${styles['handle-list']}`}>
      {leftList.map((item, index) => (
        <div
          key={index}
          className={`${styles['list-item']} ${
            leftListIndex === index ? styles['active'] : ''
          }`}
          onClick={() => handleLeftList(index)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

const ProvincesMap = () => {
  const { provShow: show, initProv } = getContxet();

  useEffect(() => {
    drwa();
  }, []);

  const ref = useRef();

  const drwa = () => {
    const pro = echarts.init(ref.current);

    initProv(pro);

    // pro.setOption({
    //   series: [
    //     {
    //       type: 'map',
    //       mapType: '西藏',
    //     },
    //   ],
    // });
  };

  return (
    <div
      className={`${styles['provinces-map']}`}
      ref={ref}
      style={{
        display: show ? 'block' : 'none',
      }}
    ></div>
  );
};

export default EchartsLayout;
