import React from 'react';
import imageDisplay from '../helper/imageDisplay';
import Icons from '../reusables/Icons';
import CourseText from '../reusables/CourseText';

/* eslint-disable implicit-arrow-linebreak, no-confusing-arrow, react/jsx-indent, indent  */
const Course = ({ courses }) =>
  courses.length > 0
    ? courses.map((item) => (
        <div
          key={item.id}
          className="w-[1200px] mx-20 cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          {imageDisplay(item)}
          <CourseText singleCourse={item} />
          <Icons />
        </div>
      ))
    : null;
/* eslint-enable implicit-arrow-linebreak, no-confusing-arrow, react/jsx-indent, indent  */
export default Course;
