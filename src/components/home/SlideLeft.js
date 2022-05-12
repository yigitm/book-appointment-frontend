import React from 'react';
import { BsCaretRight } from 'react-icons/bs';

const SlideRight = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  };

  return (
    <div className="border rounded-l-full px-7 py-3 border-gray-300 bg-gray-300 hover:border-lime-500 hover:bg-lime-500">
      <BsCaretRight
        onClick={slideLeft}
        style={{ color: 'white', marginLeft: '-1rem' }}
        size={30}
      />
    </div>
  );
};
export default SlideRight;
