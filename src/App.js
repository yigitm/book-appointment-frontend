import React from 'react';
import Nav from './components/Nav';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="flex flex-col md:flex-row mb-4">
    <Nav />
    <Courses />
    <Footer />
  </div>
);

export default App;
