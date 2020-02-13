import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FaBook } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';

import SearchResultCard from '../search/SearchResultCard';

import classes from '../../data/classes.json';

export default function Search() {
  const [isVisible, setVisibility] = useState(false);

  const className = 'COGS 120';
  const handleKeydown = (e) => {
    e.preventDefault();
    if (e.target.value !== className) {
      e.target.value += className.charAt(e.target.value.length);
    }
    if (e.target.value === className) {
      setVisibility(true);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="Search">
        <BackButton to="/" />
        <Form className="SearchBar">
          <Form.Group>
            <Form.Control type="text" placeholder="Search classes" onKeyDown={handleKeydown} />
          </Form.Group>
        </Form>
        {isVisible
          ? classes.map(c => (
            <SearchResultCard
              {...c}
              linkTo="/reviews"
            />
          ))
          : <EmptyReviewCard />}
      </Container>
    </>
  );
}

function EmptyReviewCard() {
  return (
    <Card bg="light" border="light">
      <Card.Body className="EmptyReviewCard">
        <FaBook />
      </Card.Body>
    </Card>
  );
}
