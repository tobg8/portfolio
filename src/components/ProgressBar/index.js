import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ProgressBar = ({
  height,
}) => {
  const styleBar = {
    height: `${height}%`,
  };

  return (
    <div className="container">
      <div className="container__bar" style={styleBar} />
    </div>
  );
};

ProgressBar.propTypes = {
  height: PropTypes.string.isRequired,
};

export default ProgressBar;
