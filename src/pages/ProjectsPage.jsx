import { projects } from "../assets/projectsList";
import Project from "../components/project/Project";

const ProjectsPage = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>Projects</h2>
        <ul className='projects'>
          {projects.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              img={project.img}
              index={index}
              projectLink={project.projectLink}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
