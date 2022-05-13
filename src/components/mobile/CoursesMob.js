import React from 'react';
import Header from '../reusables/Header';
import LoginCheck from '../reusables/LoginCheck';
import CourseMob from './CourseMob';

const CoursesMob = () => (
  <div className="mt-5">
    <Header styles="text-3xl" />
    <LoginCheck />
    <CourseMob />
  </div>
);

export default CoursesMob;
