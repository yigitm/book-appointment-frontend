import React from 'react';
import {
  FaSignature,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from 'react-icons/fa';
import { logout } from '../../redux/users/signIn';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    logout;
    navigate('/login');
  };

  return (
    <nav className="h-screen md:w-1/4 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="self-center mt-5">
          <FaSignature size={70} />
        </div>

        <ul className="mt-20 ml-5 text-1xl">
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            COURSES
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            RESERVE COURSE
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            ADD COURSE
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            DELETE COURSE
          </li>
          <li
            className="font-extrabold p-4 hover:bg-lime-500 hover:text-white cursor-pointer"
            onClick={() => handleLogout()}
          >
            LOGOUT
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex">
          <FaTwitter className="mr-1" />
          <FaFacebookF className="mr-1" />
          <FaGooglePlusG className="mr-1" />
          <FaVimeoV className="mr-1" />
          <FaPinterestP className="mr-1" />
        </div>
        <p className="text-sm">@2022 microverse-inc</p>
      </div>
    </nav>
  );
};

export default Nav;
