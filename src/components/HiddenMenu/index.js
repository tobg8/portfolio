import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import close from 'src/assets/images/close.svg';

const HiddenMenu = ({
  navbar,
  setNavbar,
}) => (
  <nav className={navbar ? 'nav' : 'nav nav--off'}>
    <div className="nav__overlay" />
    <div className="nav__container">
      <img className="nav__cross" src={close} alt="cross" onClick={() => setNavbar(false)} />
      <ul className="nav__links">
        <li className="nav__link">OK</li>
        <li className="nav__link">OK</li>
        <li className="nav__link">OK</li>
      </ul>
    </div>
  </nav>
);

HiddenMenu.propTypes = {
  navbar: PropTypes.bool.isRequired,
  setNavbar: PropTypes.func.isRequired,
};

export default HiddenMenu;
