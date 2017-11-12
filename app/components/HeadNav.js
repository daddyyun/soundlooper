import React from 'react';
import { Link } from 'react-router-dom';

export const HeadNav = () => {
  return (
    <div>
      <div>
        <h3><Link to="/">Home</Link></h3>
      </div>
      <div>
        <h3><Link to="/gameOfLife">Game Of Life</Link></h3>
      </div>
      <div>
        <h3><Link to="/makeYourNoise">Make Your Noise</Link></h3>
      </div>
    </div>
  );
};
