import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Header from 'src/components/Header';
import profile from 'src/assets/images/profile.jpg';
import useRefHook from 'src/hooks/useRefHook';
import textHook from 'src/hooks/textHook';
import instagram from 'src/assets/images/instagram.svg';
import twitter from 'src/assets/images/twitter.svg';
import linkedin from 'src/assets/images/linkedin.svg';

const Grid2 = ({
  scroll,
  aboutRef,
  scrollWork,
  scrollCredits,
}) => {
  const [circleRef, isVisible] = useRefHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const [navbar, setNavbar] = useState(false);

  const [textRef, inView] = textHook({
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
    <div className="grid2">
      <Header className={isVisible ? 'true' : 'off'} navbar={navbar} setNavbar={setNavbar} scroll={scroll} scrollWork={scrollWork} scrollCredits={scrollCredits} />
      <div className="grid2__ellipse" />
      <div className="grid2__text-container">
        <div style={{ position: 'absolute', top: '-50px' }} ref={aboutRef} />
        <p className={inView ? 'grid2__text grid2__text--modifier' : 'grid2__text'}>
          Actuellement étudiant, je travaille principalement sur du développement web.
          <span className="grid2__break-line" />
          J'utilise quotidiennement JS pour travailler, front & back.
          <span className="grid2__break-line" />
          Je suis actuellement à la recherche d'une alternance début Janvier 2022.
          <span className="grid2__break-line" />
          Contactez-moi !
        </p>
        <div ref={textRef} />
      </div>
      <div className="grid2__img-container">
        <img className="grid2__img" src={profile} alt="it's me" preconnect="true" width="600" height="400" />
      </div>
      <div className="grid2__ref" ref={circleRef}>
        <a
          className={isVisible ? 'grid2__social grid2__social--modifier1' : 'grid2__social'}
          href="https://www.instagram.com/tobg__/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram page"
        >
          <img className="grid2__social--img" src={instagram} alt="instagram icon" width="600" height="400" />
        </a>
        <a
          className={isVisible ? 'grid2__social grid2__social--modifier2' : 'grid2__social'}
          href="https://twitter.com/tobg_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter page"
        >
          <img className="grid2__social--img" src={twitter} alt="instagram icon" width="600" height="400" />
        </a>
        <a
          className={isVisible ? 'grid2__social grid2__social--modifier3' : 'grid2__social'}
          href="https://www.linkedin.com/in/tobg-2021/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin page"
        >
          <img className="grid2__social--img" src={linkedin} alt="instagram icon" width="600" height="400" />
        </a>
      </div>
    </div>
  );
};

Grid2.propTypes = {
  scroll: PropTypes.func,
  aboutRef: PropTypes.object,
  scrollWork: PropTypes.func,
  scrollCredits: PropTypes.func,
};

Grid2.defaultProps = {
  scroll: null,
  aboutRef: null,
  scrollWork: null,
  scrollCredits: null,
};

export default Grid2;
