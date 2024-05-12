import React from 'react';
import TeamMember from './TeamMember';
import { Row, Col } from 'antd';
import './TeamSection.css';
const teamMembers = [
    {
      id: 1,
      name: "Antoine",
      title: "Head of Investment",
      description: "Responsible for investment strategy at Prello, Antoine develops our real estate theses and organizes the sourcing and securitization of our assets.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Benjamin",
      title: "Responsible for Hunters",
      description: "Former architect and now a hunter, Benjamin leads a team dedicated to researching and finding hundreds of properties for our clients.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Laetitia Robillard",
      title: "Architect",
      description: "With 15 years of experience in architecture, Laetitia enhances each selected property with 3D plans and supervises the work to maximize their potential.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Chloris",
      title: "Real Estate Hunter",
      description: "Specializing in the identification of exceptional apartments for private clients and investors for over 10 years.",
      image: "https://via.placeholder.com/150"
    }
  ];
  

const TeamSection = () => {
  return (
    <div className="team-section" style={{marginBottom:'100px'}}>
      <h2>Une équipe de professionnels pour vous proposer le meilleur de l'investissement immobilier</h2>
      <Row gutter={[16, 16]}>
        {teamMembers.map(member => (
          <Col xs={24} sm={12} lg={6} key={member.id}>
            <TeamMember member={member} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamSection;
