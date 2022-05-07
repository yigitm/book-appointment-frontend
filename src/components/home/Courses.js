import React from 'react';
import { useSelector } from 'react-redux';
import cockpit from '../../images/cockpit.png';
import technic from '../../images/technic.png';
import cabin from '../../images/cabin.png';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

const Courses = () => {
  const state = useSelector((state) => state.featuresReducers);

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
      return <img className="w-[200px]" src={cockpit} alt="/" />;
    if (item.course_type === 'Cabin Course')
      return <img className="w-[300px]" src={cabin} alt="/" />;
    if (item.course_type === 'Technic Course')
      return <img className="w-[300px]" src={technic} alt="/" />;
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

          <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div
              id="slider"
              className="w-2/3 mx-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {state.map((item) => (
                <div
                  key={item.id}
                  className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                >
                  {imageDisplay(item)}
                  <p className="text-red-500">{item.course_type}</p>
                  <p className="text-red-500">{item.info}</p>
                </div>
              ))}
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
//<img key={item.id} src={plane} alt="/" />
