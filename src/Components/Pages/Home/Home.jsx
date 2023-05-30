import React from 'react';
import Herosection from './Herosection';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Herosection/>
      <h1 className='font-cormorant'> This is home page</h1>
    </div>
  );
};

export default Home;