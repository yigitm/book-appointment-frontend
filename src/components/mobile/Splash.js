import React from 'react';
import { Link } from 'react-router-dom';
import CoursesMob from './CoursesMob';
import plane from '../../images/plane.png';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowDropright } from 'react-icons/io';

const Splash = () => (
  <div className="min-h-screen h-20 bg-cover bg-center bg-orange-500 flex flex-col items-center justify-evenly">
    <header className="text-3xl italic font-bold text-center text-white z-10">
      <h1>THE NEW AVIATION COURSES</h1>

      <div className="flex items-center">
        <Link
          to="/courses"
          className="flex items-center bg-lime-500 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
        >
          <FiSettings className="mr-2" />
          Sign Up
          <IoIosArrowDropright className="ml-2" />
        </Link>
      </div>
    </header>
    <img className="absolute min-w-max mx-auto z-0" src={plane} alt="/" />
  </div>
);

export default Splash;
//
