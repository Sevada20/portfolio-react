import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, img, index }) => {
  return (
    <Link className='project' to={`/projects/${index}`}>
      <li>
        <img src={img} alt='Project img' className='project__img' />
        <h3 className='project__title'>{title}</h3>
      </li>
    </Link>
  );
};

export default Project;
