import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getList } from './redux/features';
import UserSign from './components/login/UserSign';
import UserLogin from './components/login/UserLogin';
import Home from './components/home/Home';
import Add from './components/home/Add';
import DeleteCourse from './components/home/DeleteCourse';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.ETUYUOkmfnWsWIvA8iBOkE2s1ZQ0V_zgnG_c4QRrhbg',
      'LOGIN?',
      false,
    );
    dispatch(getList);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<UserSign />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/courses" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/delete" element={<DeleteCourse />} />
    </Routes>
  );
};

export default App;
