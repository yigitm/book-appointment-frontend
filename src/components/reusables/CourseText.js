import React from 'react';

/* eslint-disable  react/require-default-props, react/prop-types */
const CourseText = ({ singleCourse }) => (
  <p className="mt-5 block text-center">
    <span className="text-xl font-extrabold">
      {singleCourse.course_type}
      {' '}
      :
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

export default CourseText;
/* eslint-enable  react/require-default-props, react/prop-types */
