import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Unit = ({
  link,
  name,
  description,
  modifier,
  sorry,
}) => (
  <div className="unit">
    <section className={modifier ? 'unit__description unit__description--modifier' : 'unit__description'}>
      <p className="unit__name">{name}</p>
      <p>{description}</p>
    </section>
    {sorry ? (
      <p>theo.beloeil.pro@gmail.com</p>
    ) : (
      <a className="unit__link" href={link} target="_blank" rel="noopener noreferrer">
        Learn more about {name}
      </a>
    )}
  </div>
);

Unit.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modifier: PropTypes.bool,
  sorry: PropTypes.bool,
};

Unit.defaultProps = {
  modifier: false,
  sorry: false,
};

export default Unit;
