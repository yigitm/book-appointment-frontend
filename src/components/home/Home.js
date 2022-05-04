import React from 'react';
import Nav from './Nav';
import Courses from './Courses';
import Footer from '../mobile/Footer';

const Home = () => (
  <div className="flex flex-col md:flex-row mb-4">
    <Nav />
    <Courses />
    <Footer />
  </div>
);

export default Home;
