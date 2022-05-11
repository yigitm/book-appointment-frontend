import React from 'react';
import Menu from '../../components/mobile/Menu';

describe('Menu render', () => {
  test('Menu', () => {
    const menu = () => <Menu />;

    expect(menu()).toMatchSnapshot();
  });
});
