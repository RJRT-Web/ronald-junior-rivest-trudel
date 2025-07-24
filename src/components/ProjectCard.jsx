import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function ProjectCard({ project }) {
  if (!project) {
    return <div className="project-card">Loading...</div>;
  }

  return (
    <div className=" project-card">
      <div class="test bg-animation-dark">
        <div className="project-img-contant">
          <img
            className="project-image"
            src={project.image}
            alt={`${project.name} screenshot`}
          />
        </div>
        <div className="project-details">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <div className="project-icons">
            {project.icons?.map((icon, index) => (
              <Icon
                key={index}
                icons={icon}
                size={32}
                className="project-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProjectCard;
