import React from 'react';
import CockpitImg from '../reusables/CockpitImg';
import CabinImg from '../reusables/CabinImg';
import TechnicImg from '../reusables/TechnicImg';

const imageDisplay = (course) => {
  if (course.course_type === 'Cockpit Course') return <CockpitImg />;
  if (course.course_type === 'Cabin Course') return <CabinImg />;
  if (course.course_type === 'Technic Course') return <TechnicImg />;
  return null;
};

export default imageDisplay;
