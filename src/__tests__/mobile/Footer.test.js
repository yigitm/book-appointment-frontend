import React from 'react';
import Footer from '../../components/mobile/Footer';

describe('Mobile Footer render', () => {
  test('Mobile Footer', () => {
    const Footer = () => <Footer />;

    expect(Footer()).toMatchSnapshot();
  });
});
