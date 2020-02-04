import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SchoolImage from './img/school.png';

export default function App() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to SchoolProven</h1>
        <p>
          Research your classes with confidence!
        </p>
        <p>
          <Button href="/app/reviews" variant="primary">Get Started</Button>
        </p>
      </Jumbotron>
      <Image src={SchoolImage} alt="School" fluid />
    </div>
  );
}
