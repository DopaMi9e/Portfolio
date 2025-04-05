import React, { useEffect, useState } from "react";
import ProjectList from "@/components/projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProjects([
        { name: "Project 1", description: "Description 1", date: "2023-01-01", demoLink: "#" },
        { name: "Project 2", description: "Description 2", date: "2023-02-01", demoLink: "#" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ProjectList projects={projects} />;
};

export default Projects;
