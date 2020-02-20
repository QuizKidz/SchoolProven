/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaBook, FaTimes } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';

import SearchResultCard from '../search/SearchResultCard';

import classes from '../../data/classes.json';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearchKeydown = (e) => {
    const charEntered = e.key.length === 1 ? e.key : '';
    let query = e.target.value + charEntered;

    if (e.key === 'Backspace') {
      query = query.slice(0, -1);
    }

    console.log(e.key);
    console.log(query.length);

    if (query.length < 3) {
      setSearchResults([]);
      setNoResults(false);
      return;
    }

    const results = classes.filter((course) => {
      const { professorName, className, classCode } = course;
      return professorName.toLowerCase().includes(query.toLowerCase())
        || className.toLowerCase().includes(query.toLowerCase())
        || classCode.toLowerCase().includes(query.toLowerCase());
    });

    if (results.length > 0) {
      setSearchResults(results);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="Search">
        <BackButton to="/" />
        <SearchBar placeholder="Search by class or professor" onKeyDown={handleSearchKeydown} />
        {searchResults.length > 0
          ? searchResults.map(course => (
            <SearchResultCard
              {...course}
              key={course.id}
              linkTo="/reviews"
            />
          ))
          : noResults
            ? <NoResultsCard />
            : <EmptySearchCard />}
      </Container>
    </>
  );
}

function EmptySearchCard() {
  return (
    <Card bg="light" border="light">
      <Card.Body className="EmptySearchCard">
        <FaBook />
      </Card.Body>
    </Card>
  );
}

function NoResultsCard() {
  return (
    <Card bg="light" border="light">
      <Card.Body className="EmptySearchCard">
        <h3>No results found.</h3>
        <FaTimes />
      </Card.Body>
    </Card>
  );
}
