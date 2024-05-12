import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import './CompanyInfoSection.css';
const CompanyInfoSection = () => {
  return (
    <div className="company-info-section" style={{marginBottom:'100px'}}>
      <div className="header-section">
        <h1>Fragments: une marque du groupe Prello</h1>
        <p>Fragments est une marque du groupe Prello qui a pour ambition de démocratiser et simplifier l'accès à la pierre avec ses trois marques...</p>
      </div>
      <Row gutter={16} className="statistics-section">
        <Col span={8}>
          <Card title="+22 millions d'€" description="crédits immobiliers sous gestion depuis 2021"/>
        </Col>
        <Col span={8}>
          <Card title="entre 6% et 8%" description="de rendement net sur l'ensemble du portefeuille de biens en location courte durée par Prello"/>
        </Col>
        <Col span={8}>
          <Card title="42 experts" description="sur l'ensemble de la chaîne de valeur (analystes, chasseurs, architectes...)"/>
        </Col>
      </Row>
      <div className="projects-section">
        <h2>Découvrez deux exemples de projets réalisés par le Groupe Prello</h2>
        <Row gutter={16}>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="Maison de campagne" src="https://via.placeholder.com/350x150" />}
            >
              <Card.Meta title="Maison de campagne à 1h de Paris, 10 couchages" description="Rendement: 6.7%, TRI: 7.6%" />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              cover={<img alt="Spacieuse maison normande" src="https://via.placeholder.com/350x150" />}
            >
              <Card.Meta title="Spacieuse maison normande avec piscine intérieure" description="Rendement: 6.9%, TRI: 7.5%" />
            </Card>
          </Col>
        </Row>
      </div>
      <Button type="primary" className="learn-more-button">En savoir plus</Button>
    </div>
  );
};

export default CompanyInfoSection;
