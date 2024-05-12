import React from 'react'
import { Card, Row, Col, Button, Statistic, Table, Space } from 'antd';

const Dashboard = () => {
    const transactions = []; // This would be your actual transaction data

    const columns = [
        { title: 'Propriété', dataIndex: 'propriete', key: 'propriete' },
        { title: 'Fragments', dataIndex: 'fragments', key: 'fragments' },
        { title: 'Revenus perçus', dataIndex: 'revenus', key: 'revenus' },
        { title: 'Document', dataIndex: 'document', key: 'document' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Statut', dataIndex: 'status', key: 'status' },
        { title: 'Montant investi', dataIndex: 'amount', key: 'amount' }
    ];
  return (
    <div style={{ padding: 30 }}>
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <Card>
          <Statistic title="Nombre d'investissements" value={0} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Montant Investi" value="0 €" />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Nombre de Fragments Achétés" value={0} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title="Revenus Perçus" value="0 €" />
        </Card>
      </Col>
    </Row>
    <Row  >
      <Col span={24} style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
        <Button type="primary" size="large">
          Créditer mon porte-monnaie
        </Button>
      </Col>
    </Row>
    <Row align='center' >
    <Card style={{ width: '65%' }}>
                    {transactions.length > 0 ? (
                        <Table dataSource={transactions} columns={columns} />
                    ) : (
                        <div>
                            <p>Pensez à créditer votre porte-monnaie dès à présent pour gagner du temps et ne pas manquer la prochaine vente.</p>
                            <Table dataSource={[]} columns={columns} /> {/* Empty state */}
                        </div>
                    )}
                </Card>
    </Row>
  </div>
);
}

export default Dashboard