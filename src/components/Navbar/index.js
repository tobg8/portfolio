import React from 'react';
import PropTypes from 'prop-types';
import scrollToTop from 'src/hooks/scrollToTop';
import './styles.scss';

const Navbar = ({
  scroll,
  scrollWork,
  scrollCredits,
}) => (
  <nav className="navbar">
    <ul className="navbar__container">
      <li
        className="navbar__link"
        onClick={() => scrollToTop()}
      >
        Home
      </li>
      <li
        className="navbar__link"
        onClick={() => scroll()}
      >
        About
      </li>
      <li
        className="navbar__link"
        onClick={() => scrollWork()}
      >
        Work
      </li>
      <li
        className="navbar__link"
        onClick={() => scrollCredits()}
      >
        Credits
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  scroll: PropTypes.func.isRequired,
  scrollWork: PropTypes.func.isRequired,
  scrollCredits: PropTypes.func.isRequired,
};

export default Navbar;
