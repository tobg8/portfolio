import React, { useState, useEffect } from 'react';
import './styles.scss';

import Header from 'src/components/Header';
import profile from 'src/assets/images/profile.jpg';
import useRefHook from 'src/hooks/useRefHook';
import textHook from 'src/hooks/textHook';
import instagram from 'src/assets/images/instagram.svg';
import twitter from 'src/assets/images/twitter.svg';
import linkedin from 'src/assets/images/linkedin.svg';

const Grid2 = () => {
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
      <Header className={isVisible ? 'true' : 'off'} navbar={navbar} setNavbar={setNavbar} />
      <div className="grid2__ellipse" />
      <div className="grid2__text-container">
        <p className={inView ? 'grid2__text grid2__text--modifier' : 'grid2__text'}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Odit et impedit quis numquam, sunt repellat pariatur placeat error
          aperiam consectetur quaerat voluptates officia voluptate,
          provident dolores harum laboriosam dolore earum!
        </p>
        <div ref={textRef} />
      </div>
      <div className="grid2__img-container">
        <img className="grid2__img" src={profile} alt="it's me" />
      </div>
      <div className="grid2__ref" ref={circleRef}>
        <div className={isVisible ? 'grid2__social grid2__social--modifier1' : 'grid2__social'}><img className="grid2__social--img" src={instagram} alt="instagram icon" /></div>
        <div className={isVisible ? 'grid2__social grid2__social--modifier2' : 'grid2__social'}><img className="grid2__social--img" src={twitter} alt="instagram icon" /></div>
        <div className={isVisible ? 'grid2__social grid2__social--modifier3' : 'grid2__social'}><img className="grid2__social--img" src={linkedin} alt="instagram icon" /></div>
      </div>
    </div>
  );
};

export default Grid2;
