import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import { mockImg } from '../mockData/mockImage';

const Slider = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();
  const courses = null;

  useEffect(() => {
    dispatch(getList);
  }, []);

  return (
    <div
      id="slider"
      className="w-2/3 mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
    ></div>
  );
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
