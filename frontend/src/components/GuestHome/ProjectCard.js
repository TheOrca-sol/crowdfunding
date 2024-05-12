import React from 'react';
import { Card, Button } from 'antd';

const ProjectCard = ({ project }) => {
  return (
    <Card
      hoverable
      cover={<img alt="example" src={project.image} />}
      className="project-card"
    >
      <Card.Meta title={project.title} description={project.location} />
      <div className="project-details">
        <div>{project.price}</div>
        <div className="rates">
          <div>{project.targetYield}%/an <span>Rentabilité cible</span></div>
          <div>{project.netYield}%/an <span>Rendement net</span></div>
        </div>
        <div className="investors">
          {project.investors} investisseurs
        </div>
        <Button type="primary">Découvrir ce projet</Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
