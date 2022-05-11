import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { VscSearch } from 'react-icons/vsc';
import NavMob from './NavMob';

const Menu = () => {
  const [show, setShow] = useState(false);
  /* eslint-disable no-unused-expressions */
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  /* eslint-enable no-unused-expressions */
  return (
    <div>
      <div className="flex justify-between items-center bg-orange-500 p-2">
        <button type="button" onClick={handleShow}>
          <HiMenuAlt4 size={50} className="text-white" />
        </button>
        <VscSearch
          size={40}
          className="mr-2 text-orange-500 rounded-2xl bg-white py-2"
        />
      </div>
      {show ? <NavMob /> : null}
    </div>
  );
};

export default Menu;
