import React from 'react';
import {
  FaSignature,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavMob = () => {
  const loggedIn = sessionStorage.getItem('LOGIN?');

  const handleLogout = () => {
    !!loggedIn
      ? sessionStorage.setItem('LOGIN?', false)
      : sessionStorage.setItem('LOGIN?', true);
  };

  return (
    <nav className="absolute flex flex-col justify-between ml-2 bg-white z-20 shadow-black shadow-lg">
      <div className="flex flex-col">
        <div className="self-start ml-4">
          <FaSignature size={50} />
        </div>

        <ul className="text-1xl">
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/sign">SIGN UP</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/login">LOGIN</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/courses">COURSES</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/courses">RESERVE COURSE</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/add">ADD COURSE</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/courses">DELETE COURSE</Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="font-extrabold p-4 hover:bg-lime-500 hover:text-white"
        >
          <Link to="/login">LOGOUT</Link>
        </button>
      </div>
    </nav>
  );
};
export default NavMob;
