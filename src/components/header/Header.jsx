import React from "react";
import "./style.css";
import resume from "../../assets/Sevada_Poghosyan_CV.pdf";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Sevada</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className='header__text'>
          <p>
            I'm a Armenian based React Developer focused on crafting clean &
            user-friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me and .
          </p>
        </div>
        <a href={resume} download='Resume' className='btn'>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
