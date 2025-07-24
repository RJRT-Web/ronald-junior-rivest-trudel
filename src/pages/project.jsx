import ProjectCard from "../components/ProjectCard";
import projectList from "../javascripts/projectList.js";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Project() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
    >
      <div className="home-container">
        <h1>Projets</h1>
        <p>This is the project page content.</p>
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
