import React from 'react';

import styles from '../BaseLayout.less';

export default function Footer() {
  return (
    <footer className={`${styles['footer']}`}>
      <p>地址：中国·湖南·长沙市人民中路139号 联系我们 </p>
      <p>
        中南大学湘雅二医院国家精神心理疾病临床医学研究中心 版权所有 © 2015 拷贝
      </p>
    </footer>
  );
}
