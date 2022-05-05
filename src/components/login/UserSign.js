import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../../redux/users/authentication';

const UserSign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      username,
      password,
    };
    console.log(postData);
    dispatch(postSignUp(postData));
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <p className="text-red text-xs italic">
            Please choose a password minimum 6 characters.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserSign;
