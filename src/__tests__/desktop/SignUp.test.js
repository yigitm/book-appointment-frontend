import React from 'react';
import UserSign from '../../components/login/UserSign';

describe('Test Sign Up render', () => {
  test('Test Sign Up', () => {
    const SignUp = () => <UserSign />;

    expect(SignUp()).toMatchSnapshot();
  });
});
