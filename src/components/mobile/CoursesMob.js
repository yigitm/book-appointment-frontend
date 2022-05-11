import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';
import { getList } from '../../redux/features';
import cockpit from '../../images/cockpit.png';
import technic from '../../images/technic.png';
import cabin from '../../images/cabin.png';
import plane from '../../images/plane.png';

const CoursesMob = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList);
  }, []);

  const imageDisplay = (item) => {
    if (item.course_type === 'Cockpit Course') {
      return (
        <img
          className="w-[200px] mx-auto bg-slate-200 rounded-full"
          src={cockpit}
          alt="/"
        />
      );
    }
    if (item.course_type === 'Cabin Course') {
      return (
        <img
          className="w-[200px] mx-auto bg-cyan-100 rounded-full"
          src={cabin}
          alt="/"
        />
      );
    }
    if (item.course_type === 'Technic Course') {
      return (
        <img
          className="w-[200px] mx-auto px-4 bg-zinc-400 rounded-full"
          src={technic}
          alt="/"
        />
      );
    }
    return null;
  };

  return (
    <div className="mt-5">
      <header className="text-3xl font-extrabold text-center">
        <h1>LATEST COURSES</h1>
      </header>
      <h6 className="font-thin text-center mb-20">
        {state.status === 500 ? (
          <span className="text-rose-500 font-bold">
            Please login to continue...
          </span>
        ) : (
          'Please select a course category'
        )}
      </h6>

      <div className="flex flex-col items-center px-3">
        {state.length > 0
          ? state.map((item) => (
            <div
              key={item.id}
              className="mb-3 cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              {imageDisplay(item)}

              <p className="mt-5 block text-center">
                <span className="text-xl font-extrabold">
                  {item.course_type}
                  {' '}
                  :
                </span>
                <br />
                <br />
                <span className="text-sm text-gray-300">
                  *******************************
                </span>
                <br />
                <span className="text-sm text-gray-600">{item.info}</span>
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

        {state.length === 0 || state.status === 500 ? (
          <div>
            <img className="w-full" src={plane} alt="/" />
            <p className="font-thin text-center mb-20">No course added, yet.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CoursesMob;
