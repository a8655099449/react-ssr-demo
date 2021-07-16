import React from 'react';
import { centerData } from '../../../../db/home';

import styles from '../home.less';

export default function CenterState() {
  return (
    <div className={`${styles['center-state']} container`}>
      <h2>中心动态</h2>
      <ul className="flex">
        {centerData.map((item, index) => (
          <li title={item.text} key={index}>
            <div>
              <img src={item.img} alt={item.text} />
            </div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
