import React from 'react';
import PropTypes from 'prop-types';
import Work from 'src/components/Work';
import Footer from 'src/components/Footer';
import projects from 'src/assets/data/project';
import textHook from 'src/hooks/textHook';
import './styles.scss';

const Grid3 = ({
  workRef,
  creditsRef,
}) => {
  const [textRef, inView] = textHook({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className="grid3">
      <div className="grid3__ellipse" />
      <div className="grid3__title-container">
        <div className="grid3__ref" ref={workRef} />
        <p className={inView ? 'grid3__svg-container grid3__svg-container--modifier' : 'grid3__svg-container'}>
          <img className="grid3__svg" src="https://static.tildacdn.com/tild3436-3061-4239-a366-346666353166/Group_215.svg" alt="" width="200" height="100" />
        </p>
        <p className={inView ? 'grid3__title grid3__title--modifier' : 'grid3__title'}>My Portfolio</p>
        <div className="grid3__title-ref" ref={textRef} />
      </div>
      {projects.map((project) => (
        <Work {...project} key={project.id} />
      ))}
      <Footer creditsRef={creditsRef} />
    </div>
  );
};

Grid3.propTypes = {
  workRef: PropTypes.object,
  creditsRef: PropTypes.object,
};

Grid3.defaultProps = {
  workRef: null,
  creditsRef: null,
};

export default Grid3;
