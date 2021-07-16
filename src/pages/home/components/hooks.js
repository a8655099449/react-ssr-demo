import { createContext, useEffect, useContext, useState } from 'react';
import { debounce } from 'lodash';
import { leftList } from './testData';

export const Context = createContext()



export const getContxet = (params) => {

  return useContext(Context)

}







const useHooks = () => {
  const [provShow, setProvShow] = useState(false);

  const [provName, setprovName] = useState('湖南');

  const [provChart, setprovChart] = useState(null);

  const [leftListIndex, setLeftListIndex] = useState(0);

  // 在地图上移动发生的事件
  const handleMapMove = debounce((params) => {
    console.log('👴2021-07-15 15:01:42 hooks.js line:28', params)
    if (!params) {
      return
    }
    // console.log('👴2021-07-15 14:39:36 hooks.js line:19', params)
    if (params.componentType !== 'geo') return
    if (!provShow) {
      setProvShow(true)
    }
    if (provName === params.name) return
    setprovName(params.name)

  }, 200)


  const initProv = (params) => {
    setprovChart(params)
  }

  // 绘制省份地图
  const setProvOption = () => {
    if (!provChart) {
      return
    }
    provChart.setOption({
      title: {
        show: true,
        text: provName,
        textAlign: 'left'
      },
      series: [
        {
          type: 'map',
          mapType: provName,
        },
      ],

    }, true);
  }


  const handleLeftList = (index) => {
    setLeftListIndex(index)
  }


  useEffect(() => {
    setProvOption()
  }, [provName])



  return {
    provShow, handleMapMove, initProv, leftList, leftListIndex, handleLeftList
  }
}

export default useHooks