import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../../redux/features';
import Hidden from '@material-ui/core/Hidden';
import Nav from './Nav';
import Menu from '../mobile/Menu';
import Courses from './Courses';
import Footer from '../mobile/Footer';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
        lg: 900,
        xl: 1200,
      },
    },
  });

  return (
    <main className="flex flex-col md:flex-row mb-4">
      <MuiThemeProvider theme={theme}>
        <Hidden smUp>
          <Menu />
          <Footer />
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
