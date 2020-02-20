/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaBook, FaTimes } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';

import SearchResultCard from '../search/SearchResultCard';

import handleSearch from '../../utils/handleSearch';
import classes from '../../data/classes.json';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearchKeydown = (e) => {
    handleSearch(e, classes, setSearchResults, setNoResults,
      ['professorName', 'className', 'classCode']);
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
