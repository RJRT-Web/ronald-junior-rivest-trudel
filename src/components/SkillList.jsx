import skill from "../javascripts/skill.js";
import Icon from "./Icon.jsx";

const SkillList = () => {
  return (
    <div className="skill-container">
      {skill.map((item, index) => (
        <div key={index} className="skill-till bg-animation-dark">
          <Icon icons={item.name} color={item.color} size={32} />
          <div>
            <p>{item.description}</p>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
