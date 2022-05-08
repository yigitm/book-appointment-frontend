import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import cockpit from '../../images/cockpit.png';
import technic from '../../images/technic.png';
import cabin from '../../images/cabin.png';
import plane from '../../images/plane.png';
import { BsCaretLeft, BsCaretRight, IoLogoInstagram } from 'react-icons/bs';

const Courses = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList);
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  const bgCockpit = (item) => {
    if (item.course_type === 'Cockpit Course')
      return <p className="w-[200px] ml-16 p-28  rounded-full" />;
  };

  const imageDisplay = (item) => {
    if (item.course_type === 'Cockpit Course')
      return (
        <img
          className="w-[200px] mx-auto bg-slate-200 rounded-full"
          src={cockpit}
          alt="/"
        />
      );
    if (item.course_type === 'Cabin Course')
      return (
        <img
          className="w-[200px] mx-auto bg-cyan-100 rounded-full"
          src={cabin}
          alt="/"
        />
      );
    if (item.course_type === 'Technic Course')
      return (
        <img
          className="w-[200px] mx-auto px-4 bg-zinc-400 rounded-full"
          src={technic}
          alt="/"
        />
      );
  };

  return (
    <div className="h-screen md:w-3/4">
      <div className="my-44">
        <header className="text-5xl font-extrabold text-center">
          <h1>LATEST COURSES</h1>
        </header>
        <h6 className="font-thin text-center mb-20">
          Please add a course category
        </h6>
        <div className="flex items-center justify-between">
          <div className="border rounded-r-full px-7 py-3 border-gray-300 bg-gray-300 hover:border-lime-500 hover:bg-lime-500">
            <BsCaretLeft
              onClick={slideRight}
              style={{ color: 'white', marginRight: '-1rem' }}
              size={30}
            />
          </div>

          <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div
              id="slider"
              className="flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {state.length > 0
                ? state.map((item) => (
                    <div
                      key={item.id}
                      className="mx-20 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      {imageDisplay(item)}

                      <p className="mt-5 flex flex-col items-center">
                        <span className="text-xl font-extrabold">
                          {item.course_type} :
                        </span>
                        <span className="text-sm text-gray-300">
                          *******************************
                        </span>
                        <span className="text-sm text-gray-600">
                          {item.info}
                        </span>
                      </p>
                    </div>
                  ))
                : null}

              {state.length === 0 ? (
                <img className="w-full" src={plane} alt="/" />
              ) : null}
            </div>
          </div>

          <div className="border rounded-l-full px-7 py-3 border-gray-300 bg-gray-300 hover:border-lime-500 hover:bg-lime-500">
            <BsCaretRight
              onClick={slideLeft}
              style={{ color: 'white', marginLeft: '-1rem' }}
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
