import { useState } from "react";
import { experience, study } from "../javascripts/experience.js";

function ExperienceCard() {
  const [isVisible, setIsVisible] = useState(true);

  const experienceToggle = () => {
    setIsVisible(true); // Toggle visibility
  };

  const studyToggle = () => {
    setIsVisible(false); // Toggle visibility
  };

  return (
    <div className="expedu-sections">
      <div className="tabs">
        <div
          className={`exp-tab tab ${isVisible ? "active" : ""}`}
          onClick={experienceToggle}
        >
          <p>Experience</p>
        </div>
        <div
          className={`edu-tab tab ${!isVisible ? "active" : ""}`}
          onClick={studyToggle}
        >
          <p>Education</p>
        </div>
      </div>
      <div className="exp-edu-details">
        {isVisible && (
          <div className="experience" id="experience">
            {experience?.map((job, index) => (
              <div className="experience-item" key={index}>
                <img
                  className="company-logo"
                  alt="TCS"
                  src="/assets/tcs-BqXI6WN1.svg"
                ></img>
                <div className="vertical-line"></div>
                <div className="experience-content">
                  <span>{job.date}</span>
                  <div className="title">
                    <h3>{job.title}</h3>
                  </div>
                  <div className="company">
                    <p>{job.company}</p>
                  </div>
                  <div className="role">
                    <p>{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isVisible && (
          <div className="education" id="education">
            {study?.map((study, index) => (
              <div className="education-item" key={index}>
                <img
                  className="college-logo"
                  src="/assets/srm-BhdOdDPL.svg"
                  alt="TCS"
                />
                <div className="vertical-line"></div>
                <div className="education-content">
                  <span>{study.date}</span>
                  <div className="title">
                    <h3>{study.title}</h3>
                  </div>
                  <div className="degree">
                    <p>{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
