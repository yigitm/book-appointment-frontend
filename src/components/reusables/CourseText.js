import React from 'react';

const CourseText = ({ singleCourse }) => {
  return (
    <p className="mt-5 block text-center">
      <span className="text-xl font-extrabold">
        {singleCourse.course_type} :
      </span>
      <br />
      <br />
      <span className="text-sm text-gray-300">
        *******************************
      </span>
      <br />
      <span className="text-sm text-gray-600">{singleCourse.info}</span>
    </p>
  );
};
export default CourseText;
