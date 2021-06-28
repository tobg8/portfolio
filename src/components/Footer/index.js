import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import scrollToTop from 'src/hooks/scrollToTop';
import arrow from 'src/assets/images/arrows.svg';
import workHeaderHook from 'src/hooks/workHeaderHook';
import textHook from 'src/hooks/textHook';
import linkRefHook from 'src/hooks/linkRefHook';

const Footer = ({
  creditsRef,
}) => {
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
  return (
    <footer className="footer">
      <div className="footer__svg-ref" ref={arrowRef} />
      <div className={svgInWindow ? 'footer__arrow-container footer__arrow-container--modifier' : 'footer__arrow-container'} onClick={scrollToTop}>
        <img src={arrow} alt="arrow icon" className="footer__arrow" width="600" height="400" />
      </div>
      <div className="footer__infos-container">
        <div className="footer__name-ref" ref={textRef} />
        <p className={inView ? 'footer__infos-name footer__infos-name--modifier' : 'footer__infos-name'}>theo.beloeil.pro@gmail.com</p>
        <div className="footer__credits-ref" ref={workReference} />
        <Link className={isSeen ? 'footer__infos-credits footer__infos-credits--modifier' : 'footer__infos-credits'} to="/credits">Credits</Link>
        <div className="footer__credits-ref" ref={creditsRef} />
      </div>
      <p className={inWindow ? 'footer__techno footer__techno--modifier' : 'footer__techno'}>Made with React</p>
      <div className="footer__techno-ref" ref={linkRef} />
    </footer>
  );
};

Footer.propTypes = {
  creditsRef: PropTypes.object,
};

Footer.defaultProps = {
  creditsRef: null,
};

export default Footer;
