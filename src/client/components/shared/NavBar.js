import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';

export default function NavBar() {
  return (
    <Navbar bg="light">
      <Link to="/">
        <Navbar.Brand>
          <Logo />
          SchoolProven
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
}
