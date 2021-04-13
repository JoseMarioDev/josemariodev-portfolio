import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { links, socials } from '../../utils/menuLinks';

const Menu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className={`menu ${isMenuOpen ? 'show' : ''}`}>
      <div className={`menu-branding ${isMenuOpen ? 'show' : ''}`}>
        <div className="portrait"></div>
        <a
          href="mailto:josemariodev@gmail.com"
          className="nav-link nav-link__email"
        >
          josemariodev@gmail.com
        </a>
        <ul className="social-list">
          {socials.map((social) => (
            <li key={Math.random()} className="social-list__item">
              <a
                className="social-list__link"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={Math.random()}
              >
                <i className={social.className}></i>
              </a>
            </li>
          ))}
        </ul>
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

Menu.propTypes = {
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool
};

export default Menu;
