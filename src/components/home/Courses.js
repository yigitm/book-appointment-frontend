import React from 'react';
import Slider from './Slider';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

const Courses = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  return (
    <div className="h-screen md:w-3/4">
      <div className="my-44">
        <header className="text-5xl font-extrabold text-center">
          <h1>LATEST COURSES</h1>
        </header>
        <h6 className="font-thin text-center mb-20">
          Please select a course category
        </h6>
        <div className="flex items-center">
          <div className="border rounded-r-full px-7 py-3 border-gray-300 bg-gray-300 hover:border-lime-500 hover:bg-lime-500">
            <BsCaretLeft
              onClick={slideRight}
              style={{ color: 'white', marginRight: '-1rem' }}
              size={30}
            />
          </div>
          <Slider />
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
