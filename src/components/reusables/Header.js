import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable  react/require-default-props */
const Header = ({ styles }) => (
  <header className="font-extrabold text-center">
    <h1 className={styles}>LATEST COURSES</h1>
  </header>
);

Header.propTypes = {
  styles: PropTypes.string,
};

export default Header;
/* eslint-enable  react/require-default-props */
