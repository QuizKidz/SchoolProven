import React from 'react';

import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SchoolImage from '../../img/school.png';

export default function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to SchoolProven</h1>
        <p>
          Research your classes with confidence!
        </p>
        <p>
          <Link to="/reviews">
            <Button variant="primary">Get Started</Button>
          </Link>
        </p>
      </Jumbotron>
      <Image src={SchoolImage} alt="School" fluid />
    </div>
  );
}
