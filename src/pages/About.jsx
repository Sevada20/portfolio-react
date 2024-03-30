import SkillProgressBar from "../components/skillProgressBar/SkillProgressBar";
import "./stylesPages.css";

const About = () => {
  return (
    <div>
      <h2 className=' title-1'>About Me</h2>
      <div className='aboutMe'>
        <div className='personalDetails'>
          <p>
            <strong>First Name:</strong> Sevada
          </p>
          <p>
            <strong>Last Name:</strong> Poghosyan
          </p>
          <p>
            <strong>Age:</strong> 27 Years
          </p>
          <p>
            <strong>Nationality:</strong> Armenian
          </p>
          <p>
            <strong>Freelance:</strong> Available
          </p>
          <p>
            <strong>Address:</strong> Yerevan, Armenia
          </p>
          <p>
            <strong>Phone:</strong> +374 93934945
          </p>
          <p>
            <strong>Email:</strong> poxosyansevada@gmail.com
          </p>
        </div>
        <div className='professionalSnapshot'>
          <strong>Professional Snapshot</strong>
          <p>
            With 0.5 years of dedicated work experience and a commitment to
            continuous learning and growth, I am eager to contribute my skills
            and expertise to diverse projects.
          </p>
        </div>
        <div className='certifications'>
          <strong>Certifications</strong>
          <p> 2</p>
        </div>
        <div className='languageProficiency'>
          <strong>Language Proficiency</strong>
          <p>Armenian (C2): Fluent</p>
          <p>English (A1): Basic Proficiency</p>
          <p>Russian (B2): Intermediate Proficiency</p>
        </div>
      </div>
      <SkillProgressBar />;
    </div>
  );
};

export default About;
