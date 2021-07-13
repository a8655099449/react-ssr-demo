import React from 'react';
import { connect, useIntl, getLocale, setLocale, Helmet } from 'umi';
import { Button } from 'antd';
import axios from 'axios';
import { wait } from '../utils/utils';

const Home = ({ list }) => {
  console.log('👴2021-07-13 13:36:08 index.jsx line:8', list);

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{item.blockCode}</div>
      ))}
    </div>
  );
};

Home.getInitialProps = async ({ store, isServer, history, match, route }) => {
  let res = await axios.get('http://47.107.81.99:3000/homepage/block/page');
  await wait(1000);

  console.log('👴2021-07-13 15:20:01 index.jsx line:23', history);
  return {
    list: res.data.data.blocks,
  };
};

export default connect(({ test }) => ({ title: test.title }))(Home);
