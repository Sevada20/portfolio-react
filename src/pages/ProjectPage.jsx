import gitHubBlack from "../img/icons/gitHub-black.svg";
import { Link, useParams } from "react-router-dom";
import { projects } from "../assets/projectsList";

const ProjectPage = () => {
  const params = useParams();
  const project = projects[params.id];

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{project.title}</h1>
          <img src={project.img} alt='' className='project-details__cover' />
          <div className='project-details__desc'>
            <p>Skills: {project.skills}</p>
          </div>
          <Link to={project.projectLink} className='btn-outline'>
            Go To Project
          </Link>
          <Link to={project.gitHubLink} className='btn-outline'>
            <img src={gitHubBlack} alt='' />
            GitHub repo
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
