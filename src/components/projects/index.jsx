"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects = [] }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-muted">
        No projects available at the moment.
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
