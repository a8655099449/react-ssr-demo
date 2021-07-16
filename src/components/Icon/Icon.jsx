import React from 'react';

export default function Icon({ type = 'icon-qrcode', className = '' }) {
  return <i className={`iconfont ${type} ${className}`}></i>;
}
