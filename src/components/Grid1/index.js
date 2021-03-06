import React, {
  useState, useEffect, Suspense, lazy,
} from 'react';
import Lottie from 'react-lottie';
import './styles.scss';
import PropTypes from 'prop-types';
// import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import Decoration1 from 'src/components/Decoration1';
import headerRefHook from 'src/hooks/headerRefHook';
import animationData from 'src/assets/lotties/animation.json';
import barcode from 'src/assets/images/barcode.svg';

const Header = lazy(() => import('../Header'));

const Grid1 = ({
  scroll,
  scrollWork,
  scrollCredits,
}) => {
  const [navbar, setNavbar] = useState(false);

  const [showSite, setShowSite] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSite(false);
    }, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [headerRef, inView] = headerRefHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  useEffect(() => {
    if (navbar) {
      return document.body.classList.add('no-scroll');
    }
    return document.body.classList.remove('no-scroll');
  });

  return (
    <div className="grid1">
      <Suspense fallback={<div />}>
        <Header navbar={navbar} setNavbar={setNavbar} modifier="modifier" inView={inView} className="false" scroll={scroll} scrollWork={scrollWork} scrollCredits={scrollCredits} />
        <div className={showSite ? 'grid1__screen' : 'grid1__screen--off'} />
      </Suspense>
      <div className="grid1__ellipse" />
      <div className="grid1__name">
        <p className="grid1__name--content">Theo Beloeil-Guia</p>
        {/* NAVBAR */}
      </div>
      <div className="grid1__navbar-container">
        <Navbar
          scroll={scroll}
          scrollWork={scrollWork}
          scrollCredits={scrollCredits}
        />
      </div>
      <div className="grid1__hamburger">
        <Lottie
          options={defaultOptions}
          width={350}
          style={{ transform: 'scale(2)' }}
        />
        {/* CONTACTS */}
      </div>
      <div className="grid1__title-1">
        <img className="grid1__title-1--svg" src={barcode} alt="bar code" width="600" height="400" />
        <img src="https://static.tildacdn.com/tild3735-3462-4237-b561-653936366664/df.svg" alt="decoration" className="grid1__title-1--svg2" />
        <p className="grid1__title-1--initial">t</p>
        {/* <div className="grid1__title-1--color" /> */}
        <p className="grid1__title-1--content">Unique &</p>
      </div>
      <div className="grid1__decoration1-container">
        <Decoration1 />
      </div>
      <div className="grid1__decoration2-container" />
      <div className="grid1__title-2">
        <p className="grid1__title-2--content">Creative</p>
      </div>
      <section className="grid1__title-3">
        <p className="grid1__title-3--content">Websites</p>
        <section className="grid1__container">
          <div className="grid1__finger" />
          <p className="grid1__phrase grid1__phrase--1">I'm a fullstack JS developper</p>
          <p className="grid1__phrase grid1__phrase--2">Currently improving skills at Epitech Paris</p>
          <p className="grid1__phrase grid1__phrase--3">Wishing you an enjoyable visit</p>
          <a type="button" className="grid1__dw-button" href={`${process.env.REACT_APP_BACK_URL}/pdf`} target="_blank" rel="noreferrer">Download CV</a>
        </section>
      </section>
      <div className="grid1__reference" ref={headerRef} />
    </div>
  );
};

Grid1.propTypes = {
  scroll: PropTypes.func,
  scrollWork: PropTypes.func.isRequired,
  scrollCredits: PropTypes.func,
};

Grid1.defaultProps = {
  scroll: null,
  scrollCredits: null,
};
export default Grid1;
