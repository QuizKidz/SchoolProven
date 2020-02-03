import React from 'react';
import './css/app.css';
import SchoolImage from './img/school.png';

export default function App() {
  return (
    <div>
      <h2>Welcome to SchoolProven!</h2>
      <img src={SchoolImage} alt="School" />
    </div>
  );
}
