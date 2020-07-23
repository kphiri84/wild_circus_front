import React from 'react';
import NavigBar from './NavigBar';
import bandeau from '../assets/bandeau4.jpg';
import './horaire.css'
const Horaire = () => {
  return (
    <div className="App">
      <NavigBar />
      <img className="bandeau" src={bandeau} alt="rond" />
    </div>
  );
}

export default Horaire;
