import React, { useState, useEffect } from 'react';
import './styles.scss';

import Header from 'src/components/Header';
import headerRefHook from 'src/hooks/headerRefHook';
import hamburger1 from '../../assets/images/hamburger1.svg';

const Grid1 = () => {
  const [navbar, setNavbar] = useState(false);

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
      <Header navbar={navbar} setNavbar={setNavbar} modifier="modifier" inView={inView} className="false" />
      <div className="grid1__ellipse" />
      <div className="grid1__name">
        <p className="grid1__name--content">Theo Beloeil</p>
      </div>
      <div className="grid1__hamburger">
        <img className="grid1__hamburger-svg" src={hamburger1} alt="" onClick={() => setNavbar(true)} />
      </div>
      <div className="grid1__title-1">
        <p className="grid1__title-1--content">Unique &</p>
      </div>
      <div className="grid1__title-2">
        <p className="grid1__title-2--content">Creative</p>
      </div>
      <section className="grid1__title-3">
        <p className="grid1__title-3--content">Websites</p>
        <section className="grid1__container">
          <div className="grid1__finger" />
          <p className="grid1__phrase grid1__phrase--1">I'm a fullstack JS developper</p>
          <p className="grid1__phrase grid1__phrase--2">Actually improving skills at Epitech Paris</p>
          <p className="grid1__phrase grid1__phrase--3">Wish you an enjoyable trip</p>
          <button type="button" className="grid1__dw-button">Download CV</button>
        </section>
      </section>
      <div className="grid1__reference" ref={headerRef} />
    </div>
  );
};

export default Grid1;
