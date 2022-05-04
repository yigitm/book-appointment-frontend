import React from 'react';
import Nav from './Nav';
import Courses from './Courses';
import Footer from '../mobile/Footer';

const Home = () => (
  <main className="flex flex-col md:flex-row mb-4">
    <Nav />
    <Courses />
    <Footer />
  </main>
);

export default Home;
