import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import cockpit from '../../images/cockpit.png';
import technic from '../../images/technic.png';
import cabin from '../../images/cabin.png';
import plane from '../../images/plane.png';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

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
    <div className="h-screen md:w-3/4 z-0">
      <div className="my-44">
        <header className="text-5xl font-extrabold text-center">
          <h1>LATEST COURSES</h1>
        </header>
        <h6 className="font-thin text-center mb-20">
          Please select a course category
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

                      <p className="mt-5 block text-center">
                        <span className="text-xl font-extrabold">
                          {item.course_type} :
                        </span>
                        <br />
                        <br />
                        <span className="text-sm text-gray-300">
                          *******************************
                        </span>
                        <br />
                        <span className="text-sm text-gray-600">
                          {item.info}
                        </span>
                      </p>
                      <div className="mt-5 flex text-gray-400 justify-center">
                        <TiSocialFacebook
                          size={40}
                          className="mr-5 py-2 rounded-full border border-gray-300"
                        />
                        <TiSocialTwitter
                          size={40}
                          className="mr-5 py-2 rounded-full border border-gray-300"
                        />
                        <TiSocialInstagram
                          size={40}
                          className="mr-5 py-2 rounded-full border border-gray-300"
                        />
                      </div>
                    </div>
                  ))
                : null}

              {state.length === 0 ? (
                <div>
                  <img className="w-full" src={plane} alt="/" />
                  <p className="font-thin text-center mb-20">
                    No course added, yet.
                  </p>
                </div>
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
