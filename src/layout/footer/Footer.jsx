import React from "react";
import linkedIn from "../../img/icons/linkedIn.svg";
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import facebook from "../../img/icons/facebook.svg";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <Link to='https://www.instagram.com/sevada.poxosyan/'>
                <img src={instagram} alt='Link' />
              </Link>
            </li>
            <li className='social__item'>
              <Link to='https://www.facebook.com/sevada.poghosyan'>
                <img src={facebook} alt='Link' />
              </Link>
            </li>

            <li className='social__item'>
              <Link to='https://github.com/Sevada20'>
                <img src={gitHub} alt='Link' />
              </Link>
            </li>
            <li className='social__item'>
              <Link to='https://www.linkedin.com/in/sevada-poghosyan-8b0131253/'>
                <img src={linkedIn} alt='Link' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
