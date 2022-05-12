import React from 'react';

const LoginCheck = () => (
  <h6 className="font-thin text-center mb-20">
    {sessionStorage.getItem('LOGIN?') ? (
      'Please select a course category'
    ) : (
      <span className="text-rose-500 font-bold">
        Please login to continue...
      </span>
    )}
  </h6>
);
export default LoginCheck;
