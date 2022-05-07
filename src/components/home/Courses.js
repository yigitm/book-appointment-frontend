import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import cockpit from '../../images/cockpit.png';
import technic from '../../images/technic.png';
import cabin from '../../images/cabin.png';
import plane from '../../images/plane.png';

import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

const Courses = () => {
  const state = useSelector((state) => state.featuresReducers);
  const [courses, setCourses] = useState(false);
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

  const imageDisplay = (item) => {
    if (item.course_type === 'Cockpit Course')
      return <img className="w-[180px] mx-auto p-5" src={cockpit} alt="/" />;
    if (item.course_type === 'Cabin Course')
      return <img className="w-[300px] mx-auto" src={cabin} alt="/" />;
    if (item.course_type === 'Technic Course')
      return <img className="w-[300px] mx-auto" src={technic} alt="/" />;
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

          <div className="w-2/3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div
              id="slider"
              className="min-w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {state.length > 0
                ? state.map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer hover:scale-105 ease-in-out duration-300"
                    >
                      {imageDisplay(item)}
                      <p className="text-red-500">{item.course_type}</p>
                      <p className="text-red-500">{item.info}</p>
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
