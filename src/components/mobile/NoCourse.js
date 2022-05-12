import React from 'react';
import { useSelector } from 'react-redux';
import plane from '../../images/plane.png';

const NoCourse = () => {
  const state = useSelector((state) => state.featuresReducers);

  return state.length === 0 || state.status === 500 ? (
    <div>
      <img className="w-full" src={plane} alt="/" />
      <p className="font-thin text-center mb-20">No course added, yet.</p>
    </div>
  ) : null;
};
export default NoCourse;
