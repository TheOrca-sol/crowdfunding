import React from 'react';
import './FinancialSummary.css';  // Ensure you have this CSS file

const FinancialSummary = () => {
    const expenses = {
        generalMaintenance: -2246,
        energy: -1974,
        repairFunds: -643,
        taxes: -1237,
        managementFees: -2950,
        total: -9050
    };

    const revenues = {
        dailyIncome: 113,
        occupancyRate: '64%',
        annualRevenue: 29497
    };

    const results = {
        operational: 20447,
        financial: 18248,
        netAnnual: 351,
        netYield: '7.02%'
    };

    // New data for investment & resale
    const investmentDetails = {
        purchasePrice: 146000,
        notaryFees: 10700,
        huntingFees: 5800,
        renovation: 58976,
        furniture: 15800,
        reserveFunds: 10300,
        subscriptionFee: 12374,
        totalAcquisitionCost: 259950
    };

    const resaleDetails = {
        priceAfterRenovation: 211548,
        holdingPeriod: '8 ans',
        annualAppreciation: '4%',
        estimatedResaleValue: 289518,
        targetNetYield: '8.4%',
        capitalGain: '+65%'
    };

    return (
        <div className="financial-summary">
            {/* Existing Sections */}
            <div className="expenses">
                <h2>Charges</h2>
                <ul>
                    <li>Maintenance générale: {expenses.generalMaintenance} €</li>
                    <li>Énergie & consommables: {expenses.energy} €</li>
                    <li>Fonds de travaux: {expenses.repairFunds} €</li>
                    <li>Taxes: {expenses.taxes} €</li>
                    <li>Frais de gestion sur les revenus: {expenses.managementFees} €</li>
                    <li><strong>Total charges annuelles estimées: {expenses.total} €</strong></li>
                </ul>
            </div>
            <div className="revenues">
                <h2>Revenus</h2>
                <ul>
                    <li>Revenu quotidien moyen: +{revenues.dailyIncome} €</li>
                    <li>Taux d'occupation: {revenues.occupancyRate}</li>
                    <li><strong>Revenus totaux annuels estimés: {revenues.annualRevenue} €</strong></li>
                </ul>
            </div>
            <div className="results">
                <h2>Résultat</h2>
                <ul>
                    <li>Résultat opérationnel annuel: {results.operational} €</li>
                    <li>Résultat financier annuel: {results.financial} €</li>
                    <li>Résultat net annuel estimé par Fragments: {results.netAnnual} €</li>
                    <li>Rendement net estimé: {results.netYield}</li>
                </ul>
            </div>

            {/* New Section: Investissement & Revente */}
            <div className="investment-and-resale">
                <h2>Investissement & Revente</h2>
                <div className="section investment">
                    <h3>Investissement</h3>
                    <ul>
                        <li>Prix d'achat: {investmentDetails.purchasePrice} €</li>
                        <li>Frais de notaire: {investmentDetails.notaryFees} €</li>
                        <li>Frais de chasse: {investmentDetails.huntingFees} €</li>
                        <li>Travaux: {investmentDetails.renovation} €</li>
                        <li>Ameublement et équipement: {investmentDetails.furniture} €</li>
                        <li>Réserve travaux: {investmentDetails.reserveFunds} €</li>
                        <li>Commission de souscription: {investmentDetails.subscriptionFee} €</li>
                        <li><strong>Coût d'acquisition total: {investmentDetails.totalAcquisitionCost} €</strong></li>
                    </ul>
                </div>
                <div className="section resale">
                    <h3>Revente</h3>
                    <ul>
                        <li>Prix du bien après rénovation: {resaleDetails.priceAfterRenovation} €</li>
                        <li>Durée de détention: {resaleDetails.holdingPeriod}</li>
                        <li>Revalorisation annuelle: {resaleDetails.annualAppreciation}</li>
                        <li>Montant estimé de revente: {resaleDetails.estimatedResaleValue} €</li>
                        <li>Rentabilité nette cible: {resaleDetails.targetNetYield}</li>
                        <li>Gain de capital: {resaleDetails.capitalGain}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FinancialSummary;
