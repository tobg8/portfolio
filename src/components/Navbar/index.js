import React, { useState } from 'react';
import PropTypes from 'prop-types';
import scrollToTop from 'src/hooks/scrollToTop';
import './styles.scss';

const Navbar = ({
  scroll,
  scrollWork,
  scrollCredits,
}) => {
  const [surprise, setSurprise] = useState(false);
  const handleEasterEgg = () => setSurprise(!surprise);
  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <a className={surprise ? 'navbar__surprise navbar__surprise--on' : 'navbar__surprise'} href="https://www.youtube.com/watch?v=sfCvf8pEj_Y" target="_blank" rel="noreferrer">You're already home</a>
        <li
          className="navbar__link"
          onClick={() => {
            scrollToTop();
            handleEasterEgg();
          }}
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
};

Navbar.propTypes = {
  scroll: PropTypes.func.isRequired,
  scrollWork: PropTypes.func.isRequired,
  scrollCredits: PropTypes.func.isRequired,
};

export default Navbar;
