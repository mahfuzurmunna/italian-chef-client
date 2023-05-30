import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;