import React from 'react';
import Home from '../../components/home/Home';

describe('Home render', () => {
  test('Home', () => {
    const Home = () => <Home />;

    expect(Home()).toMatchSnapshot();
  });
});
