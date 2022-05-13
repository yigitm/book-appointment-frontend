import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import Icons from '../reusables/Icons';
import imageDisplay from '../helper/imageDisplay';
import CourseText from '../reusables/CourseText';

const CourseMob = () => {
  const state = useSelector((state) => state.featuresReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList);
  }, []);

  return state.length > 0
    ? state.map((course) => (
      <div key={course.id} className="flex flex-col courses-center px-3">
        <div className="mb-3 cursor-pointer hover:scale-105 ease-in-out duration-300">
          {imageDisplay(course)}
          <CourseText singleCourse={course} />
          <Icons />
        </div>
      </div>
    ))
    : null;
};
export default CourseMob;
