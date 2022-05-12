import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';

const SlideRight = () => {
  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  };

  return (
    <div className="border rounded-r-full px-7 py-3 border-gray-300 bg-gray-300 hover:border-lime-500 hover:bg-lime-500">
      <BsCaretLeft
        onClick={slideRight}
        style={{ color: 'white', marginRight: '-1rem' }}
        size={30}
      />
    </div>
  );
};
export default SlideRight;
