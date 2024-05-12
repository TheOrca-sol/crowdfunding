import React from 'react';
import { Button } from 'antd';
import './InvestmentStrategySection.css';
const InvestmentStrategySection = () => {
  return (
    <div className="investment-strategy-section" align="center" >
      <h1>Notre stratégie d'investissement : la location courte durée</h1>
      <p style={{marginBottom:'50px'}}>Nous sélectionnons des biens situés dans des villes moyennes, que nous exploitons en location courte durée. Ce mode de location offre des rendements supérieurs à la location longue durée de 2% en moyenne.</p>
      <Button type="primary" size='large' className="strategy-button">Voir la stratégie d'investissement</Button>
    </div>
  );
};

export default InvestmentStrategySection;
