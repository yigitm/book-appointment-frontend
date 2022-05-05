import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSign from './components/login/UserSign';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<UserSign />} />
    <Route path="/courses" element={<Home />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default App;
