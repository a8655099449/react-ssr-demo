import React from 'react';
import { Link } from 'umi';
import { tab } from '../../../../db/home';
import styles from '../home.less';

export default function Tab() {
  return (
    <div className={`${styles['tab']} container`}>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>

            <div className={`${styles['content']}`}>
              <img src={item.img} alt="" className={`obeject-cover`} />
              <div className={`${styles['bottom']}`}>
                <p>{item.text}</p>
                <div className={`${styles['more']}`}>
                  <Link to={item.toPath}>了解更多 &gt; </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
