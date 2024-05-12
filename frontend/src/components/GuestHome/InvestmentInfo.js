import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { SafetyCertificateOutlined, EuroOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const InvestmentInfo = () => {
  return (
    <div style={{ background: '#282c34', padding: '50px' , marginBottom:'100px'}}>
      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: '70%', margin: '0 auto' }}>
        <Col style={{marginTop:'80px'}} >
        <Title level={2} style={{ color: '#fff', textAlign: 'center' }}>Pourquoi investir dans l’immobilier avec Fragments ?</Title>
      <Paragraph style={{ color: '#fff', textAlign: 'center', marginBottom: '50px' }}>
        Un placement immobilier simple et sécurisé offrant le parfait équilibre entre risque, rendement et liquidité.
      </Paragraph>
        </Col>
      <Col xs={24} sm={12} lg={8}>
          <Card style={{ backgroundColor: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#c6e377' }} />
            <Title level={4} style={{ color: '#fff', marginTop: '20px' }}>Pas de frais cachés</Title>
            <Paragraph style={{ color: '#fff' }}>
            Les rendements annoncés sont nets de tous frais : aucune commission d'entrée, de sortie ou de gestion. Tout est déjà inclus dans le calcul.
            </Paragraph>
          </Card>
        </Col>

        
      </Row>
      
      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: '1200px', margin: '0 auto', marginTop:'24px' }}>
        <Col xs={24} sm={12} lg={8}>
          <Card style={{ backgroundColor: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#c6e377' }} />
            <Title level={4} style={{ color: '#fff', marginTop: '20px' }}>Rendement de 6% à 8% net versés tous les trimestres</Title>
            <Paragraph style={{ color: '#fff' }}>
              Les revenus locatifs issus de la location courte durée sont distribués trimestriellement. À la revente, vous bénéficiez de la plus-value potentielle du bien.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card style={{ backgroundColor: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <EuroOutlined style={{ fontSize: '32px', color: '#c6e377' }} />
            <Title level={4} style={{ color: '#fff', marginTop: '20px' }}>Risque maîtrisé</Title>
            <Paragraph style={{ color: '#fff'}}>
              Le sous-jacent de votre investissement porte sur de l’immobilier résidentiel situé dans des zones à fort potentiel de valorisation, contrairement à d’autres types d’actifs immobiliers.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card style={{ backgroundColor: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircleOutlined style={{ fontSize: '32px', color: '#c6e377' }} />
            <Title level={4} style={{ color: '#fff', marginTop: '20px' }}>Investissement simple à partir de 50€</Title>
            <Paragraph style={{ color: '#fff' }}>
              Investissez à partir de 50 € en 2 minutes, revendez facilement vos parts sur notre marché de gré à gré prévu pour courant 2024.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InvestmentInfo;
