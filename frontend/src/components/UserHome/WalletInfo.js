import React from 'react';
import { EuroOutlined, PhoneOutlined, BankOutlined } from '@ant-design/icons';

const WalletInfo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#006d75', padding: '0 12px', borderRadius: '8px', marginRight:'10px' }}>
      <EuroOutlined style={{ color: 'lime', marginRight: 8 }} />
      <span style={{ color: 'white', marginRight: 16 }}>0 €</span>
      <BankOutlined style={{ color: 'aqua', marginRight: 8 }} />
      <span style={{ color: 'white' }}>0</span>
    </div>
  );
};
export default WalletInfo;
