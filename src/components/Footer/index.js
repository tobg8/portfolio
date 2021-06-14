import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import scrollToTop from 'src/hooks/scrollToTop';
import arrow from 'src/assets/images/arrows.svg';
import workHeaderHook from 'src/hooks/workHeaderHook';
import textHook from 'src/hooks/textHook';
import linkRefHook from 'src/hooks/linkRefHook';
import arrowHook from 'src/hooks/arrowHook';

const Footer = () => {
  const [workReference, isSeen] = workHeaderHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const [arrowRef, svgInWindow] = workHeaderHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const [textRef, inView] = textHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  const [linkRef, inWindow] = linkRefHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });
  console.log(inWindow);
  return (
    <footer className="footer">
      <div className="footer__svg-ref" ref={arrowRef} />
      <div className={svgInWindow ? 'footer__arrow-container footer__arrow-container--modifier' : 'footer__arrow-container'} onClick={scrollToTop}>
        <img src={arrow} alt="arrow icon" className="footer__arrow" />
      </div>
      <div className="footer__infos-container">
        <div className="footer__name-ref" ref={textRef} />
        <p className={inView ? 'footer__infos-name footer__infos-name--modifier' : 'footer__infos-name'}>Theo Beloeil Guia</p>
        <div className="footer__credits-ref" ref={workReference} />
        <Link className={isSeen ? 'footer__infos-credits footer__infos-credits--modifier' : 'footer__infos-credits'} to="/credits">Credits</Link>
        {/* Push this in credits section */}
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </div>
      <p className={inWindow ? 'footer__techno footer__techno--modifier' : 'footer__techno'}>Made with React</p>
      <div className="footer__techno-ref" ref={linkRef} />
    </footer>
  );
};
export default Footer;
