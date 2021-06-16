import React from 'react';
import PropTypes from 'prop-types';
import workHeaderHook from 'src/hooks/workHeaderHook';
import textHook from 'src/hooks/textHook';
import linkRefHook from 'src/hooks/linkRefHook';
import github from 'src/assets/images/logo-github.svg';
import './styles.scss';

const Work = ({
  name,
  description,
  githubUrl,
  websiteUrl,
}) => {
  const [workReference, isSeen] = workHeaderHook({
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
    <div className="work">
      <section className="work__infos">
        <p className={isSeen ? 'work__title work__title--modifier' : 'work__title'}>{name}</p>
        <p className={inView ? 'work__description work__description--modifier' : 'work__description'}>{description}</p>
      </section>
      <div ref={textRef} className="work__description-ref" />
      <section className={inWindow ? 'work__links work__links--modifier' : 'work__links'}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin page"
        >
          <img className="work__github" src={github} alt="github icon" width="50" height="50" />
        </a>
        <div className="work__title-ref" ref={workReference} />
        <a
          className="work__links-container"
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin page"
        >
          <p className="work__learn-more">More about {name}</p>
          <img src="https://static.tildacdn.com/tild3336-3931-4333-b931-633866326462/button.svg" alt="arrow icon" width="20" height="20" />
        </a>
        <div className="work__links-ref" ref={linkRef} />
      </section>
    </div>
  );
};

Work.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default Work;
