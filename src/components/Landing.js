import React from 'react';
import NavigBar from './NavigBar'
import './nav.css'
import Home from './Home';

const Landing = (props) => {
  return (
    <>
      <NavigBar />
      <Home />
    </>
  );
}

export default Landing;
