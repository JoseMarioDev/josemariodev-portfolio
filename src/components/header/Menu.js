/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { links, socials } from '../../data';

import portrait from '../../assets/selfie-10.jpg';

const Menu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className={`menu ${isMenuOpen ? 'show' : ''}`}>
      <div className={`menu-branding ${isMenuOpen ? 'show' : ''}`}>
        <div className="portrait">
          <img src={portrait} alt="Jose Mario" />
        </div>
        <div className="icons">
          {socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={Math.random()}
            >
              <i className={social.className}></i>
            </a>
          ))}
        </div>
      </div>
      <ul className={`menu-nav ${isMenuOpen ? 'show' : ''}`}>
        {links.map((link) => (
          <li
            className={`nav-item ${isMenuOpen ? 'show' : ''}`}
            key={Math.random()}
          >
            <Link to={link.route} className="nav-link" onClick={toggleMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
