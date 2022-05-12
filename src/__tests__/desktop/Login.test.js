import React from 'react';
import UserLogin from '../../components/login/UserLogin';

describe('Test Login render', () => {
  test('Test Login', () => {
    const login = () => <UserLogin />;

    expect(login).toMatchSnapshot();
  });
});
