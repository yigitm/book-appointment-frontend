import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { getList } from '../../redux/features';
import Mobile from '../mobile/Mobile';
import Nav from './Nav';
import Courses from './Courses';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList);
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 768,
        lg: 768,
        xl: 1200,
      },
    },
  });

  return (
    <main className="flex flex-col md:flex-row mb-4">
      <MuiThemeProvider theme={theme}>
        <Hidden mdUp>
          <Mobile />
        </Hidden>
        <Hidden mdDown>
          <Nav />
          <Courses />
        </Hidden>
      </MuiThemeProvider>
    </main>
  );
};

export default Home;
