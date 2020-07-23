import React from 'react';
import NavigBar from './NavigBar';
import bandeau from '../assets/bandeau5.jpg'
import "./reservations.css"

const Reservations = () => {
  return (
    <div className="App">
      <NavigBar />
      <div className="bandeau"></div>
      <div className="superpose">
        <div>
          <p>Durée du spectacle :</p>
          <p>2 heures</p>
        </div>
        <div>
          <p>Public :</p>
          <p>Tout public, 3 ans et plus</p>
        </div>
      </div>
      <h1>EN TOURNEE</h1>
    </div>
  );
}

export default Reservations;
