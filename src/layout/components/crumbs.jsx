import React from 'react';
import { useHistory } from 'react-router';

export default function Crumbs() {
  console.log('👴2021-07-14 14:58:12 crumbs.jsx line:5', useHistory());

  return (
    <div className="container">
      <div>您现在的位置：</div>
    </div>
  );
}
