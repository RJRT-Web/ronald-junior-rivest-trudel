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
        <h1>Compétence</h1>
        <SkillList />
      </div>
    </motion.div>
  );
}

export default Skill;
