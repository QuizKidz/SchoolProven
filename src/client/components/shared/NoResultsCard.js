import React from 'react';

import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

export default function NoResultsCard() {
  return (
    <Card bg="light" border="light" className="NoResultsCard">
      <Card.Body className="EmptySearchCard">
        <h3>No results found.</h3>
        <FaTimes />
      </Card.Body>
    </Card>
  );
}
