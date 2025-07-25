import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Skill from "./pages/skill";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
