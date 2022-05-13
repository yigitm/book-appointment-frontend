import React from 'react';
import plane from '../../images/plane.png';

const CourseCheck = ({ state }) =>
  parseInt(sessionStorage.getItem('USER_ID')) === userID ? (
    <div>
      <img className="w-full" src={plane} alt="/" />
    </div>
  ) : null;
export default CourseCheck;
