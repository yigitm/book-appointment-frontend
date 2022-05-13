import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../reusables/Header';
import Course from './Course';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';
import LoginCheck from '../reusables/LoginCheck';
import TokenCheck from './TokenCheck';
import NoCourse from './NoCourse';
import { getList } from '../../redux/features';

const Courses = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage['LOGIN?'] !== undefined) {
      dispatch(getList);
    }
  }, []);

  return (
    <div className="h-screen md:w-3/4 z-0">
      <div className="my-44">
        <Header styles="text-5xl" />
        <LoginCheck />

        <div className="flex items-center justify-between">
          <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div
              id="slider"
              className="flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <SlideRight />
              <Course courses={state} />
              <NoCourse courses={state} />
              <TokenCheck />
              <SlideLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
