import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  const wow = 'truc';
  return (
    <div className="home-button">
      <Link className="home-button__button" to="/">Home</Link>
    </div>
  );
};

export default HomeButton;
