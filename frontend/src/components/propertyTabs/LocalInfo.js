import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './LocalInfo.css'; // Make sure this CSS file is linked
import 'leaflet/dist/leaflet.css';

const data = [
    {year: '1-1-2018', price: 2300},
    {year: '1-1-2019', price: 2500},
    {year: '1-1-2020', price: 2700},
    {year: '1-1-2021', price: 2900},
    {year: '1-1-2022', price: 3000},
    {year: '1-1-2023', price: 3100}
];

const LocalInfo = () => {
    return (
        <div className="local-info-section">
            <div className="map-and-chart">
                <div className="map-container">
                    <MapContainer center={[47.322047, 5.04148]} zoom={13} scrollWheelZoom={false} style={{ height: '300px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[47.322047, 5.04148]}>
                            <Popup>
                                Dijon, France
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="local-details">
                <div className="info-card">
                    <span className="icon">🏪</span>
                    <div>
                        <h3>Commerces à proximité</h3>
                        <p>Au pied des commerces de bouches, restaurants et caves à vin.</p>
                    </div>
                </div>
                <div className="info-card">
                    <span className="icon">🚶</span>
                    <div>
                        <h3>Accessibilité</h3>
                        <p>A 5min à pieds de la Cité Internationale de la Gastronomie et 15min de la gare.</p>
                    </div>
                </div>
                <div className="info-card">
                    <span className="icon">📈</span>
                    <div>
                        <h3>Dynamisme du marché</h3>
                        <p>Marché immobilier dynamique : +4% en 1 an, +36% en 5 ans.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalInfo;
