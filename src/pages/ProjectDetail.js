import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../app/data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>
        {project.description.replace(/"/g, '&quot;')}
      </p>
      <img src={project.image} alt={project.name} />
    </div>
  );
};

export default ProjectDetail;
