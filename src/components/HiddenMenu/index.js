import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import scrollToTop from 'src/hooks/scrollToTop';
import close from 'src/assets/images/close.svg';

const HiddenMenu = ({
  navbar,
  setNavbar,
  scroll,
  scrollWork,
  scrollCredits,
}) => (
  <nav className={navbar ? 'nav' : 'nav nav--off'}>
    <div className="nav__overlay" />
    <div className="nav__container">
      <img className="nav__cross" src={close} alt="cross" onClick={() => setNavbar(false)} width="100" height="100" />
      <ul className="nav__links">
        <li
          className="nav__link"
          onClick={() => {
            setNavbar(false);
            scrollToTop();
          }}
        >Home
        </li>
        <li
          className="nav__link"
          onClick={() => {
            setNavbar(false);
            scroll();
          }}
        >About
        </li>
        <li
          className="nav__link"
          onClick={() => {
            setNavbar(false);
            scrollWork();
          }}
        >
          Work
        </li>
        <li
          className="nav__link"
          onClick={() => {
            setNavbar(false);
            scrollCredits();
          }}
        >
          Credits
        </li>
      </ul>
    </div>
  </nav>
);

HiddenMenu.propTypes = {
  navbar: PropTypes.bool.isRequired,
  setNavbar: PropTypes.func.isRequired,
  scroll: PropTypes.func,
  scrollWork: PropTypes.func,
  scrollCredits: PropTypes.func,
};

HiddenMenu.defaultProps = {
  scroll: null,
  scrollWork: null,
  scrollCredits: null,
};
export default HiddenMenu;
