import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../app/data';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectsData.map(project => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
