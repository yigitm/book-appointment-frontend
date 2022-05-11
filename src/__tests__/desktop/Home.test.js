import React from 'react';
import Home from '../../components/home/Home';

describe('Home render', () => {
  test('Home', () => {
    const home = () => <Home />;

    expect(home).toMatchSnapshot();
  });
});
