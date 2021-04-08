/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <>
      <div className='logo'>
        <a href='#home'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div className='menu-btn'>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
      <header>
        <nav className='menu'>
          <div className='menu-branding'>
            <div className='portrait'></div>

            <a href='mailto:josemariodev@gmail.com' className='nav-link'>
              josemariodev@gmail.com
            </a>
            <ul className='social-list'>
              <li className='social-list__item'>
                <a
                  className='social-list__link'
                  target='_blank'
                  href='https://linkedin.com/in/josemariodev'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li className='social-list__item'>
                <a
                  className='social-list__link'
                  target='_blank'
                  href='https://twitter.com/josemariodev'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li className='social-list__item'>
                <a
                  className='social-list__link'
                  target='_blank'
                  href='https://github.com/josemariodev'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className='menu-nav'>
            <li className='nav-item current'>
              <a href='#home' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#services' className='nav-link'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' className='nav-link'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio' className='nav-link'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/Jose-Montero-resume.pdf'
                target='_blank'
                className='nav-link'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
