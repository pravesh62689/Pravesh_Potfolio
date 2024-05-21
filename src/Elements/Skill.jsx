import React from 'react';
import '../styles/skillsSection.css';

const Skill = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.logo} alt={skill.name} />
      <h3 className="skill-name">{skill.name}</h3>
      <ul className="skill-items">
        {skill.skills.map((item, index) => (
          <li key={index} className="skill-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;