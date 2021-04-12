import React, { useState } from 'react';
import Menu from './Menu';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div
        className={`menu-btn ${isMenuOpen ? 'close ' : ''}`}
        onClick={toggleMenu}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
