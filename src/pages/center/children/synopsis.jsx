import React from 'react';

import styles from './synopsis.less';

const config = {
  bg1: require('@/assets/images/center/bg1.png'),
  bg2: require('@/assets/images/center/bg2.png'),
  img1: require('@/assets/images/center/tip1.png'),
  img2: require('@/assets/images/center/tip2.png'),
  img3: require('@/assets/images/center/tip3.png'),
};

export default function Synopsis() {
  return (
    <div className={`${styles['synopsis']}`}>
      <Banner />
      <div className="center">
        <h2 className="box-border">
          复旦大学中国医院排行榜专科排名：稳居综合医院精神科第一{' '}
        </h2>
      </div>
      <div className={`${styles['bg2']}`}>
        <img src={config.bg2} alt="" />
      </div>
      <div className={` container`}>
        <div className={`${styles['img-box-1']}`}>
          <img src={config.img3} alt="" />
          <img src={config.img2} alt="" />
          <ul>
            <li>8家分中心</li>
            <li>25家核心单位</li>
            <li>319家基层网络单位 省份覆盖率65％</li>
            <li>地级市 覆盖率64.3％</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const Banner = props => {
  return (
    <div className={`${styles['banner']}`}>
      <img src={config.bg1} alt="" />
    </div>
  );
};
