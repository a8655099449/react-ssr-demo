import React from 'react';
import Icon from '../../components/Icon/Icon';


import { QrcodeOutlined, ArrowUpOutlined } from '@ant-design/icons';

import styles from '../BaseLayout.less';

export default function RightTool() {
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles['right-tool']}`}>
      <div
        className={`${styles['tool-item']} ${styles['qrcode-wrap']}`}
        title="关注公众号"
      >
        <QrcodeOutlined className={`${styles['tool-icon']}`} />
        <div className={`${styles['qrcode']}`}>
          <img
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/FZ0RST/00/4e/df/004edff7f8d04dce84b57a491bae3158/images/%E9%A6%96%E9%A1%B5/u133.png?token=3e9b2a85259a3e3e6aa07a456fb1e25b909a103cc9aa87a1eef6f7dc6b040e06"
            alt=""
          />
        </div>
      </div>
      <div className={`${styles['tool-item']}`}>
        <ArrowUpOutlined
          type="icon-back-top"
          className={`${styles['tool-icon']}`}
          onClick={backTop}
        />
      </div>
    </div>
  );
}
