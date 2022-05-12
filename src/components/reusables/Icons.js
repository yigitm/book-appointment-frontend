import React from 'react';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

const Icons = () => (
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
);
export default Icons;
