import React, { useState } from 'react';
import './Property.css'; // Make sure this CSS file exists and is linked properly
import { Tabs, Button, Slider, Row, Col, Card, InputNumber } from 'antd';
import LocalInfo from './propertyTabs/LocalInfo';
import FinancialSummary from './propertyTabs/FinancialSummary';
import InvestmentInfo from './propertyTabs/InvestmentInfo';
import PropertyDetails from './propertyTabs/PropertyDetails';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const data = [
  { quarter: 'Jan-Mar', price: 50, occupancy: 60 },
  { quarter: 'Apr-Jun', price: 75, occupancy: 65 },
  { quarter: 'Jul-Sep', price: 100, occupancy: 80 },
  { quarter: 'Oct-Dec', price: 60, occupancy: 50 }
];



const { TabPane } = Tabs;

const Property = () => {
    const navigate = useNavigate();  // Hook for navigation

    const [investment, setInvestment] = useState(1000);  // Default investment amount

    const handleSliderChange = value => {
        setInvestment(value);
    };
    const gainIn8Years = Math.round(investment * 0.65);  // Example calculation for gains
    const annualRevenue = Math.round(investment * 0.07);  // Annual revenue example

    const calculatordata = [
        { year: 2023, value: investment },
        { year: 2031, value: investment + gainIn8Years }
    ];

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };
    return (
        <>
            <div className="property-container">
                <div className="header">
                <Button icon={<ArrowLeftOutlined />} className="back-button"  onClick={goBack}>Retour</Button>
                    <div className="property-title">
                        L'Authentique: Un T3 dans le centre de Dijon
                    </div>
                    <div className="tags">
                        <span className="tag tag-sold">Vente terminée</span>
                        <span className="tag tag-new">Nouveau</span>
                    </div>
                </div>
                <div className="property-image">
                    <img src="/home/ayman/Desktop/crowdfunding/frontend/public/home.jpg" alt="Property Interior" />
                </div>
                <div className="property-details">
                    <div className="location">Dijon, Côte-D'Or</div>
                    <div className="financials">
                        <div className="rentability">
                            Rentabilité cible <strong>8,4% /an</strong>
                        </div>
                        <div className="net-yield">
                            Rendement net <strong>7,02% /an</strong>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button className="action-button">Plan</button>
                    <button className="action-button">Voir les Photos</button>
                </div>
            </div>
            <div className="content-container"> {/* Flexbox container */}
                <div className="tabs-container">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Général" key="1">
                            {/* Content for General Info */}
                            <InvestmentInfo />
    
                        </TabPane>
                        <TabPane tab="Bien" key="2">
                            {/* Content for Property Details */}
                            
                            <PropertyDetails />

                        </TabPane>
                        <TabPane tab="Localité" key="3">
                            {/* Content for Location Info */}
                            <LocalInfo />
                        </TabPane>
                        <TabPane tab="Finance" key="4">
                            {/* Content for Financial Details */}
                            <FinancialSummary/>
                        </TabPane>
                    </Tabs>
                </div>
                <Card className="investment-card">
                    <Row gutter={16}>
                        <Col span={24}>
                            <label>Mon investissement</label>
                            <Slider
                                min={100}
                                max={5000}
                                onChange={handleSliderChange}
                                value={investment}
                            />
                            <InputNumber
                                min={100}
                                max={5000}
                                style={{ margin: '0 16px' }}
                                value={investment}
                                onChange={handleSliderChange}
                            /> €
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={12}>
                            <div>Gains dans 8 ans</div>
                            <div>+{gainIn8Years} € (+65%)</div>
                        </Col>
                        <Col span={12}>
                            <div>Revenus annuels</div>
                            <div>+{annualRevenue} € (7.02%)</div>
                        </Col>
                    </Row><br/>
                    <Row gutter={32}>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={calculatordata}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#ffcc00" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Row>
                </Card>
            </div>
        </>
    );
};

export default Property;
