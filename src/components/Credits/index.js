import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Unit from './Unit';

const Credits = () => (
  <div className="credits">
    <Link className="credits__home-link" to="/">Back to home</Link>
    <div className="credits__ellipse" />
    <div className="credits__container">
      <Unit
        name="marina suvorova"
        link="https://marinasuvorova.com/"
        description="this website is inspired by Marina Suvorova website, i did use some of her SVG's."
        modifier
      />
      <Unit
        name="Freepik"
        link="https://www.freepik.com"
        description="SVG found on flaticon, credits to Freepik."
      />
      <Unit
        name="bashir ahmed"
        link="https://bahmeddesigns.com"
        description="Lottie animation made by Bashir Ahmed."
      />
      <Unit
        name="dave gandy"
        link="https://www.flaticon.com/fr/auteurs/dave-gandy"
        description="Icons found on Flaticon made by Dave Gandy."
      />
      <Unit
        name="sorry"
        description="If you found something that belongs to you please contact me so i can credit you or remove your creation."
        sorry
      />
    </div>
  </div>
);

export default Credits;
