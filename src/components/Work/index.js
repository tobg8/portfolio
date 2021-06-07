import React from 'react';
import PropTypes from 'prop-types';
import github from 'src/assets/images/logo-github.svg';
import './styles.scss';

const Work = ({
  name,
  description,
  githubUrl,
  websiteUrl,
}) => {
  const wow = 'truc';
  return (
    <div className="work">
      <section className="work__infos">
        <p>{name}</p>
        <p className="work__infos--modifier">{description}</p>
      </section>
      <section className="work__links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin page"
        >
          <img className="work__github" src={github} alt="github icon" />
        </a>

        <a
          className="work__links-container"
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin page"
        >
          <p className="work__learn-more">Learn more</p>
          <img src="https://static.tildacdn.com/tild3336-3931-4333-b931-633866326462/button.svg" alt="arrow icon" />
        </a>

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
