import React from 'react';
import { Card, Button, Table, Alert } from 'antd';
import { CreditCardOutlined, WarningOutlined } from '@ant-design/icons';
import './Portfolio.css';
const Portfolio = () => {
    const transactions = []; // This would be your actual transaction data

    const columns = [
        { title: 'Transaction', dataIndex: 'transaction', key: 'transaction' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Statut', dataIndex: 'status', key: 'status' },
        { title: 'Montant', dataIndex: 'amount', key: 'amount' }
    ];

    return (
        <div className="portfolio-page" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Mon porte-monnaie</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Card
                    style={{ width: '30%', textAlign: 'center' }}
                    actions={[
                        <Button key="credit" type="primary">Créditer</Button>,
                        <Button key="withdraw">Retirer</Button>
                    ]}
                >
                    <p>Disponible</p>
                    <h2><CreditCardOutlined /> 0 €</h2>
                </Card>
                <Card style={{ width: '65%' }}>
                    {transactions.length > 0 ? (
                        <Table dataSource={transactions} columns={columns} />
                    ) : (
                        <div>
                            <p>Vous n'avez pas encore de transactions</p>
                            <Table dataSource={[]} columns={columns} /> {/* Empty state */}
                        </div>
                    )}
                </Card>
            </div>
            <Alert
                message="Anticiper la prochaine vente !"
                description="Pensez à approvisionner votre porte-monnaie afin de gagner du temps et ne pas manquer la prochaine vente !"
                type="info"
                showIcon
                icon={<WarningOutlined />}
                style={{ marginTop: '20px' }}
            />
        </div>
    );
};

export default Portfolio;
