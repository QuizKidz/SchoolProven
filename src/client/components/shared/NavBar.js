import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';

export default function NavBar() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <Logo />
        SchoolProven
      </Navbar.Brand>
    </Navbar>
  );
}
