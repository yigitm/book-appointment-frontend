import React from 'react';
import plane from '../../images/plane.png';

const TokenCheck = () => (sessionStorage.getItem('TOKEN') ? null : (
  <div>
    <img className="w-full" src={plane} alt="/" />
  </div>
));
export default TokenCheck;
