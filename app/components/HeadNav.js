import React from 'react';
import { Link } from 'react-router-dom';

export const HeadNav = () => {
  return (
    <div>
      <div>
        <h3><Link to="/">Home</Link></h3>
      </div>
      <div>
        <h3><Link to="/soundLooper">Sound Looper</Link></h3>
      </div>
      <div>
        <h3><Link to="/drawSound">Draw Sound</Link></h3>
      </div>
    </div>
  );
};
