import React from 'react';
import UserLogin from '../../components/login/UserLogin';

describe('Test Login render', () => {
  test('Test Login', () => {
    const Login = () => <UserLogin />;

    expect(Login()).toMatchSnapshot();
  });
});
