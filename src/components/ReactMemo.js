import React, { useState, useCallback } from 'react';

const SkillList = React.memo(({ skills }) => {
//   console.log("Rendering SkillList");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemo() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const addSkill = useCallback(() => {
    if (skill.length > 5) {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkill(''); // Clear the input after adding the skill
    }
  }, [skill]);

  return (

    <div>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill"
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemo;

