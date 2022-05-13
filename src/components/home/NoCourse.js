import React from 'react';
import plane from '../../images/plane.png';
/* eslint-disable  react/require-default-props, react/prop-types */
const NoCourse = ({ courses }) => (courses.length === 0 ? (
  <div>
    <img className="w-full" src={plane} alt="/" />
    <p className="font-thin text-center mb-20">No course added, yet.</p>
  </div>
) : null);
export default NoCourse;
/* eslint-disable react/require-default-props,react/prop-types */
