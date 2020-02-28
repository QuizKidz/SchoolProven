/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaBook, FaPenNib } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import SearchResultCard from '../search/SearchResultCard';

import handleSearch from '../../utils/handleSearch';

import classes from '../../data/classes.json';

export default function Search(props) {
  const { isWritingReview } = props;

  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearchInput = (e) => {
    handleSearch(e, classes, [], setSearchResults, setNoResults,
      ['professorName', 'className', 'classCode']);
  };

  const placeholder = isWritingReview
    ? 'Search for a class to review'
    : 'Search by class or professor';

  return (
    <>
      <NavBar />
      <Container className="Search">
        <BackButton />
        <SearchBar placeholder={placeholder} onInput={handleSearchInput} />
        <div className="Search-results">
          {searchResults.length > 0
            ? searchResults.map(course => (
              <SearchResultCard
                {...course}
                key={course.id}
                linkTo={isWritingReview ? `/write/${course.id}` : `/reviews/${course.id}`}
              />
            ))
            : noResults
              ? <NoResultsCard />
              : <EmptySearchCard isWritingReview={isWritingReview} />}
        </div>
      </Container>
    </>
  );
}

function EmptySearchCard(props) {
  const { isWritingReview } = props;

  return (
    <Card bg="light" border="light">
      <Card.Body className="EmptySearchCard">
        {isWritingReview ? <FaPenNib /> : <FaBook />}
      </Card.Body>
    </Card>
  );
}

Search.propTypes = {
  isWritingReview: PropTypes.bool,
};

Search.defaultProps = {
  isWritingReview: false,
};

EmptySearchCard.propTypes = {
  isWritingReview: PropTypes.bool.isRequired,
};
