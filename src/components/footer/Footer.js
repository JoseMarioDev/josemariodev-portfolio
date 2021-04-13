import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:josemariodev@gmail.com" className="footer__link">
        josemariodev@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://linkedin.com/in/josemariodev"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://twitter.com/josemariodev"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://github.com/josemariodev"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
