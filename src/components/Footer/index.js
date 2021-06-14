import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import scrollToTop from 'src/hooks/scrollToTop';
import arrow from 'src/assets/images/arrows.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__arrow-container" onClick={scrollToTop}>
      <img src={arrow} alt="arrow icon" className="footer__arrow" />
    </div>
    <div className="footer__infos-container">
      <p className="footer__infos-name">Theo Beloeil Guia</p>
      <Link className="footer__infos-credits" to="/credits">Credits</Link>
      {/* Push this in credits section */}
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
    <p className="footer__techno">Made with React</p>
  </footer>
);

export default Footer;
