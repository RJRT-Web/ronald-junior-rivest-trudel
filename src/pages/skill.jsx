import { motion } from "framer-motion";
import SkillList from "../components/SkillList";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Skill() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
    >
      <div className="container">
        <h2>Compétence</h2>
        <SkillList />
      </div>
    </motion.div>
  );
}

export default Skill;
