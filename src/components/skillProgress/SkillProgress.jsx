import "./style.css";

const SkillProgress = ({ skillName, percentage }) => {
  return (
    <div className='skill-progress-bar'>
      <div className='skill-name'>{skillName}</div>
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${percentage}%` }}></div>
      </div>
      <div className='percentage'>{percentage}%</div>
    </div>
  );
};

export default SkillProgress;
