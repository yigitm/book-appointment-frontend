import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../../redux/users/signIn';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const state = useSelector((state) => state.usersReducers);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (state['error']) setMessage(state['error']);
    if (state.user) navigate('/courses');
  }, [state]);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };
    dispatch(postLogin(loginData));
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Username
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Password
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="text-xs italic">
            Please choose a password minimum 6 characters.
          </p>
        </div>
        <div className="flex items-center items-start">
          <button
            className="bg-gray-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
          <p className="text-rose-500 ml-5">{message ? message : null}</p>
        </div>
      </div>
    </form>
  );
};

export default UserLogin;
