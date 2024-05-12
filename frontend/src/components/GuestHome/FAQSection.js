import React from 'react';
import { Collapse } from 'antd';
import './FAQSection.css';
const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
    { key: '1', question: 'Comment investir dans un projet ?', answer: 'Detail about how to invest...' },
    { key: '2', question: 'Que se passe-t-il si l\'objectif de financement n\'est pas atteint ?', answer: 'Explanation of procedures...' },
    { key: '3', question: 'Quel est le cadre réglementaire ?', answer: 'Information on regulations...' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section" style={{marginBottom:'100px'}}>
      <h2>Vos Questions Nos Réponses</h2>
      <Collapse accordion style={{marginBottom:'20px'}}>
        {faqData.map(faq => (
          <Panel header={faq.question} key={faq.key}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
      <button className="more-info-button">Trouver les réponses à toutes vos questions</button>
    </div>
  );
};

export default FAQSection;
