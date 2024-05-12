import React from 'react';
import './InvestmentInfo.css';  // Make sure to create this CSS file
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { quarter: 'Jan-Mar', price: 50, occupancy: 60 },
    { quarter: 'Apr-Jun', price: 75, occupancy: 65 },
    { quarter: 'Jul-Sep', price: 100, occupancy: 80 },
    { quarter: 'Oct-Dec', price: 60, occupancy: 50 }
  ];
const InvestmentInfo = () => {
    return (
        <>
        <div className="investment-section">
            <h2>Pourquoi investir ?</h2>
            <div className="info-blocks">
                <div className="info-block">
                    <span className="icon">🌟</span>
                    <h3>Zone d'influence</h3>
                    <p>Chef-lieu et centre économique de la région Bourgogne, Dijon dispose également d'un impressionnant patrimoine historique et culturel.</p>
                </div>
                <div className="info-block">
                    <span className="icon">🌟</span>
                    <h3>Emplacement</h3>
                    <p>Situé dans le cœur de Dijon, l'appartement bénéficiera d'une forte demande locative toute l'année.</p>
                </div>
                <div className="info-block">
                    <span className="icon">🌟</span>
                    <h3>Revalorisation</h3>
                    <p>Les travaux de rénovation permettront de maximiser le retour sur investissement.</p>
                </div>
            </div>
            <div className="call-to-action">
                <button className="cta-button">Appeler un conseiller</button>
                <p>Vous souhaitez en savoir plus sur ce projet, ou sur Fragments ?</p>
            </div>
        </div>
                                <p>Information about general investment benefits.</p>
                                <ResponsiveContainer width="100%" height={300}>
                                  <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                      top: 5,
                                      right: 30,
                                      left: 20,
                                      bottom: 5
                                    }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="quarter" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="occupancy" stroke="#82ca9d" />
                                  </LineChart>
                                  </ResponsiveContainer>
                                  <div style={{ width: '100%', height: 300 }}>
                                  <ResponsiveContainer>
                                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="quarter" />
                                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                      <Tooltip />
                                      <Legend />
                                      <Bar yAxisId="left" dataKey="price" fill="#8884d8" name="Prix moyen nuitée" />
                                      <Line yAxisId="right" type="monotone" dataKey="occupancy" stroke="#82ca9d" name="Taux occupation" />
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                                </>
    );
};

export default InvestmentInfo;
