import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getList } from '../src/redux/features';
import UserSign from './components/login/UserSign';
import UserLogin from './components/login/UserLogin';
import Home from './components/home/Home';
import Add from './components/home/Add';
import Detail from './components/detail/Detail';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserSign />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/courses" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
