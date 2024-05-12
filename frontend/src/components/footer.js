import React from 'react';
import './footer.css';
import { Avatar} from 'antd';
import { useNavigate } from 'react-router-dom'; // For React Router v5
import { BankOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {

  const navigate = useNavigate();
  // const navigate = useNavigate(); // For React Router v6

  const navigateToLogin = () => {
    navigate('/signup'); // For React Router v6
  };  
  return (
    <footer className="footer">
      <div className="footer-content">
      <Avatar size="large" icon={<BankOutlined />} onClick={() => navigate('/home')} style={{  flexShrink: 0 }} />

        <div className="footer-links">
          <a href="/faq">FAQ</a>
          <a href="/about">À propos</a>
          <a href="/terms">CGU</a>
        </div>
        <div className="social-media-links">
          <Avatar icon={<TwitterOutlined />} />
          <a href="https://facebook.com"></a>
          <Avatar icon={<FacebookOutlined />} />
          <a href="https://instagram.com"></a>
          <Avatar icon={<InstagramOutlined />} />
          <a href="https://instagram.com"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
