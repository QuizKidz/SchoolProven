import React, { useState } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import ReviewPageHeader from '../reviews/ReviewPageHeader';
import StarRatings from '../shared/StarRatings';
import ClassStats from '../reviews/ClassStats';
import ReviewBreakdown from '../reviews/ReviewBreakdown';
import ReviewCard from '../shared/ReviewCard';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import handleSearch from '../../utils/handleSearch';

import reviews from '../../data/reviews.json';
import classes from '../../data/classes.json';

export default function Reviews() {
  const { classId } = useParams();
  const currentClass = classes[classId];
  // eslint-disable-next-line eqeqeq
  const reviewsForClass = reviews.filter(review => review.classId == classId);

  const [searchResults, setSearchResults] = useState(reviewsForClass);
  const [noResults, setNoResults] = useState(false);
  const [isQuestionsActive, setQuestionsActive] = useState(false);

  const {
    professorName,
    className,
    classCode,
    classStats,
  } = currentClass;

  const totalClassRating = reviewsForClass.reduce(
    (totalRating, review) => review.rating + totalRating,
    0
  );
  const numReviews = reviewsForClass.length;
  const classRating = totalClassRating / numReviews;

  const handleSearchInput = (e) => {
    handleSearch(e, reviewsForClass, reviewsForClass, setSearchResults, setNoResults, ['review']);
  };

  const handleToggleChange = (value) => {
    setQuestionsActive(value === 1);
  };

  const renderToggle = () => (
    <div className="Reviews-toggle">
      <ToggleButtonGroup
        type="radio"
        name="PageToggle"
        defaultValue={0}
        size="lg"
        onChange={handleToggleChange}
      >
        <ToggleButton value={0} variant="light">Reviews</ToggleButton>
        <ToggleButton value={1} variant="light">Q & A</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );

  return (
    <>
      <NavBar />
      <Container className="Reviews">
        <BackButton to="/search" />
        <br />
        {renderToggle()}
        <ReviewPageHeader
          professorName={professorName}
          className={className}
          classCode={classCode}
        />
        <StarRatings rating={classRating} stat={`(${numReviews})`} />
        <ClassStats {...classStats} />
        <ReviewBreakdown ratingBreakdowns={['70%', '11%', '8%', '4%', '7%']} />
        <div className="Reviews-header">
          <h5>Reviews</h5>
          <SearchBar
            className="Reviews-SearchBar"
            placeholder="Search Reviews"
            onInput={handleSearchInput}
          />
        </div>
        {
          noResults
            ? <NoResultsCard />
            : searchResults.map(review => <ReviewCard key={review.id} {...review} />)
        }
      </Container>

      {isQuestionsActive ? <Redirect to={`/questions/${classId}`} /> : null}
    </>
  );
}
