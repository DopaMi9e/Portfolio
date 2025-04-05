import React from "react";
import { useRouter } from "next/router";
import { projectsData } from "../app/data";
import Image from "next/image";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the project ID from the URL
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description.replace(/"/g, "&quot;")}</p>
      <Image
        src={project.image}
        alt={project.name}
        width={600} // Replace with actual width
        height={400} // Replace with actual height
        priority={true}
      />
    </div>
  );
};

export default ProjectDetail;
