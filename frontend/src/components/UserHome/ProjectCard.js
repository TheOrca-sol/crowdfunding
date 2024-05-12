import React from 'react';
import { Card, Tag, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  
    const navigate = useNavigate(); // For React Router v6
  
  return (
    <Card
      hoverable
      cover={<img alt={project.title} src={project.image} style={{ height: 180, objectFit: 'cover' }} />}
      className="project-card"
    >
      <div className="project-tags">
        {project.status.map(status => <Tag color="blue" key={status}>{status}</Tag>)}
      </div>
      <Card.Meta
        title={project.title}
        description={`${project.price} - ${project.location}`}
      />
      <div className="project-details">
        <div>
          <strong>{project.targetYield}%/an</strong>
          <span>Rentabilité cible</span>
        </div>
        <div>
          <strong>{project.netYield}%/an</strong>
          <span>Rendement net</span>
        </div>
        <div>{project.investors} investisseurs</div>
        <Button type="primary" className="discover-button" onClick={() => navigate('/property')}>Découvrir</Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
