import React from "react";
import "./style.css";
import SkillProgress from "../skillProgress/SkillProgress";

const SkillProgressBar = () => {
  return (
    <div className='skillsBlockWrapper'>
      <h2>My Skills</h2>
      <div className='skillsBlock'>
        <div className='column'>
          <SkillProgress skillName='HTML' percentage={65} />
          <SkillProgress skillName='CSS' percentage={65} />
          <SkillProgress skillName='JavaScript' percentage={65} />
          <SkillProgress skillName='TypeScript' percentage={60} />
          <SkillProgress skillName='React' percentage={70} />
        </div>
        <div className='column'>
          <SkillProgress skillName='Redux/ReduxToolkit' percentage={65} />
          <SkillProgress skillName='JSS' percentage={50} />
          <SkillProgress skillName='REST API' percentage={50} />
          <SkillProgress skillName='Git/GitHub' percentage={60} />
          <SkillProgress skillName='Oracle SQL' percentage={30} />
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
