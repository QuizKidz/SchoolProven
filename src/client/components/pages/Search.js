/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaBook } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import SearchResultCard from '../search/SearchResultCard';

import handleSearch from '../../utils/handleSearch';

import classes from '../../data/classes.json';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearchInput = (e) => {
    handleSearch(e, classes, [], setSearchResults, setNoResults,
      ['professorName', 'className', 'classCode']);
  };

  return (
    <>
      <NavBar />
      <Container className="Search">
        <BackButton to="/" />
        <SearchBar
          className="Search-SearchBar"
          placeholder="Search by Class or Professor"
          onInput={handleSearchInput}
        />
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
