import React from 'react';
import axios from 'axios';
import { dynamic ,IGetInitialProps } from 'umi';
import { wait } from '../../utils/utils';
import echarts from "echarts";   
import 'echarts/map/js/china.js'



const Home = ({ list }) => {
  // console.log('👴2021-07-13 14:58:59 Home.jsx line:5',list)
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index}>{item.blockCode}</div>
      ))}
    </div>
  );
};
Home.getInitialProps = async ({ store, isServer, history, match, route }) => {
  let res = await axios.get('http://47.107.81.99:3000/homepage/block/page');
  return {
    list: res.data.data.blocks,
  };
} ;


// https://gitee.com/coderacehao/echarts-map/tree/master

export default Home;
