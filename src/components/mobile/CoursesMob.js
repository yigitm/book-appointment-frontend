import React from 'react';
import HeaderMob from './HeaderMob';
import LoginCheck from '../reusables/LoginCheck';
import CourseMob from './CourseMob';

const CoursesMob = () => {
  return (
    <div className="mt-5">
      <HeaderMob />
      <LoginCheck />
      <CourseMob />
    </div>
  );
};

export default CoursesMob;
