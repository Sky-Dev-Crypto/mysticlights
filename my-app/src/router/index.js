import React from 'react';

import Footer from '../components/Footer';
import Home from '../pages/Home';

import GlobalStyles from '../globalStyles';

const Router = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default Router;
