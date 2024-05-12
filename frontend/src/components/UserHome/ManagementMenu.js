import React, { useState } from 'react';
import { Menu } from 'antd';
import './ManagementMenu.css';
const ManagementMenuAntd = () => {
  const [current, setCurrent] = useState('all');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="all">Tout</Menu.Item>
      <Menu.Item key="properties">Mes biens</Menu.Item>
      <Menu.Item key="resales">Mes reventes</Menu.Item>
    </Menu>
  );
};

export default ManagementMenuAntd;
