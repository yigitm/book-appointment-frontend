import React from 'react';
import { useSelector } from 'react-redux';
import { mockImg } from '../mockData/mockImage';

const Slider = () => {
  const state = useSelector((state) => state.featuresReducers);

  return state.map((item) => (
    <div
      key={item.id}
      id="slider"
      className="w-2/3 mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
    >
      <p className="text-red-500">{item.course_type}</p>
      <p className="text-red-500">{item.info}</p>
    </div>
  ));
};

export default Slider;

/*{mockImg.map((item) => (
        <img
          key={item.id}
          className="w-[270px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
          src={item.img}
          alt="/"
        />
      ))} */
