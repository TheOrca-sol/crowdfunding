import React from 'react';
import ProjectCard from './ProjectCard';
import { Row, Col } from 'antd';
import './ProjectsSection.css';
const projects = [
    {
      id: 1,
      title: "L'Authentique: T3 au cœur de Dijon",
      image: `${process.env.PUBLIC_URL}/home.jpg`,
      location: "Dijon, Côte-d'Or",
      price: "259 950€",
      targetYield: "8.41",
      netYield: "7.02",
      investors: 823
    },

    {
      id: 2,
      title: "Le Royal: T2 au cœur des Chateaux de la Loire",
      image: `${process.env.PUBLIC_URL}/home.jpg`,
      location: "Blois, Loir-et-Cher",
      price: "172 250€",
      targetYield: "8.58",
      netYield: "7.11",
      investors: 573
    },
    {
      id: 3,
      title: "Superbe longère restaurée à 1h de Paris",
      image: `${process.env.PUBLIC_URL}/home.jpg`,
      location: "Maisons, Eure-et-Loir",
      price: "578 600€",
      targetYield: "7.11",
      netYield: "6.51",
      investors: 1483
    }
  ];
  

const ProjectsSection = () => {
  return (
    <div className="projects-section"  style={{ maxWidth:'70%'}} >
      <Row gutter={[16, 16]} >
        {projects.map(project => (
          <Col xs={24} sm={12} lg={8} key={project.id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsSection;
