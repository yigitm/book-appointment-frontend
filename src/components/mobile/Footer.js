import React from 'react';
import {
  FaSignature,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from 'react-icons/fa';

const Footer = () => (
  <div className="flex justify-center items-center">
    <FaTwitter className="mr-1" />
    <FaFacebookF className="mr-1" />
    <FaGooglePlusG className="mr-1" />
    <FaVimeoV className="mr-1" />
    <FaPinterestP className="mr-1" />

    <p className="text-sm">@2022 microverse-inc</p>
  </div>
);

export default Footer;
