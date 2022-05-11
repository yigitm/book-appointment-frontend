import React from 'react';
import UserSign from '../../components/login/UserSign';

describe('Test Sign Up render', () => {
  test('Test Sign Up', () => {
    const signUp = () => <UserSign />;

    expect(signUp).toMatchSnapshot();
  });
});
