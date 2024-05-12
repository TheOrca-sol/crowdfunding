import React, { useState } from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import { DownOutlined, UserOutlined, PhoneOutlined,BankOutlined } from '@ant-design/icons';
import { useHistory,useNavigate } from 'react-router-dom'; // For React Router v5
import WalletInfo from './UserHome/WalletInfo';
import Signup from './SignupLogin';
import './Navbar.css';
const Navbar = ({ isLoggedIn }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/'); // For React Router v6
    };  

  const userDropdownMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Log Out</Menu.Item>
    </Menu>
  );

  // Menu when the user is logged in
  const loggedInMenu = (
    <Menu mode="horizontal" theme="light" style={{flex: 0.5, lineHeight: '64px' }}>
      <Menu.Item key="ventes" onClick={() => navigate('/home')}>Nos ventes</Menu.Item>

      <Menu.Item key="dashboard" onClick={() => navigate('/dashboard')}>Dashboard</Menu.Item>
      <Menu.Item key="portfolio" onClick={() => navigate('/portfolio')}>Porte-monnaie</Menu.Item>
      <Menu.Item key="notifications">Ressources</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 50px', backgroundColor: '#f0f2f5', height: '64px' }}>
    <Avatar size="large" icon={<BankOutlined />} onClick={() => navigate('/home')} style={{ marginRight: '20px', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {!isLoggedIn ? (
          <Menu mode="horizontal" theme="light" style={{flex: 0.5, lineHeight: '64px'}}>
            <Menu.Item key="invest">Invest</Menu.Item>
            <Menu.Item key="about">Who are we?</Menu.Item>
            <Menu.Item key="resources">Resources</Menu.Item>
          </Menu>
        ) : (
          loggedInMenu
        )}
      </div>
      {!isLoggedIn ? (
        <div>
          <Button type="primary" style={{ marginRight: '10px' }} onClick={showModal}>Log in</Button>
          <Button type="primary">Schedule a meeting</Button>
          <Signup visible={isModalVisible} setVisible={setIsModalVisible} />

        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <WalletInfo />
            <Avatar size='default' icon={<PhoneOutlined />} onClick={() => navigate('/home')} style={{ marginRight: '20px', flexShrink: 0 }} />
            <Dropdown overlay={userDropdownMenu} style={{ marginLeft: '10px' }}>
              <Button>
                <UserOutlined />
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        )}
      </div>
  );
};

export default Navbar;
