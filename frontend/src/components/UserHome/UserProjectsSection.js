import React from 'react';
import ProjectCard from './ProjectCard';
import { Row, Col } from 'antd';
import './UserProjectsSection.css';
const projectData = [
  {
    id: 1,
    title: "L'Authentique: Un T3 dans le centre de Dijon",
    image: "https://via.placeholder.com/350x200",
    status: ['Terminée', 'Nouveau'],
    price: '259 950 €',
    location: "Dijon, Côte-d'Or",
    targetYield: 8.41,
    netYield: 7.02,
    investors: 825
  },
  // More projects here
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <Row gutter={[16, 16]}>
        {projectData.map(project => (
          <Col xs={24} sm={12} lg={8} key={project.id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsSection;
