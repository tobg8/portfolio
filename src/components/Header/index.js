import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import hamburger1 from 'src/assets/images/hamburger1.svg';
import HiddenMenu from 'src/components/HiddenMenu';

const Header = ({
  className,
  navbar,
  setNavbar,
  modifier,
  inView,
  scroll,
  scrollWork,
}) => (
  <div className={inView ? 'header header--close' : `header header--${className}`}>
    <div className="header__in-out" />
    <div className="header__mid" />
    <div className={`header__hamburger header__hamburger--${modifier}`}>
      <img className="header__hamburger-img" src={hamburger1} alt="" onClick={() => setNavbar(true)} />
    </div>
    <div className="header__in-out" />
    <HiddenMenu navbar={navbar} setNavbar={setNavbar} scroll={scroll} scrollWork={scrollWork} />
  </div>
);
Header.propTypes = {
  className: PropTypes.string,
  navbar: PropTypes.bool.isRequired,
  setNavbar: PropTypes.func.isRequired,
  modifier: PropTypes.string,
  inView: PropTypes.bool,
  scroll: PropTypes.func,
  scrollWork: PropTypes.func,
};

Header.defaultProps = {
  modifier: '',
  className: '',
  inView: false,
  scrollWork: null,
  scroll: null,
};

export default Header;
