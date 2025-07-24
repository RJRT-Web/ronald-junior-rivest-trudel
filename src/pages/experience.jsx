import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Experience() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
    >
      <div className="experience-container">
        <h1>Expérience</h1>
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
