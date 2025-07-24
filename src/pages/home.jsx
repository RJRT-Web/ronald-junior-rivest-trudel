import Icon from "../components/Icon";
import ProfilCard from "../components/ProfilCard";
import profil from "../javascripts/profil";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Home() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
    >
      <ProfilCard profil={profil} />
    </motion.div>
  );
}

export default Home;
