import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Link, Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

import { FaRegFrown } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import ReviewPageHeader from '../reviews/ReviewPageHeader';
import StarRatings from '../shared/StarRatings';
import ClassStats from '../reviews/ClassStats';
import ReviewBreakdown from '../reviews/ReviewBreakdown';
import ReviewCard from '../reviews/ReviewCard';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import handleSearch from '../../utils/handleSearch';

import reviews from '../../data/reviews.json';
import classes from '../../data/classes.json';
import users from '../../data/users.json';

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.set({ page: '/reviews' });
  }, []);

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

  const renderReviews = () => (
    // eslint-disable-next-line no-nested-ternary
    noResults
      ? <NoResultsCard />
      : searchResults.length > 0
        ? searchResults.map((review) => {
          const { reviewerId, ...reviewInfo } = review;
          const reviewer = reviewerId !== null && reviewerId < users.length
            ? users[reviewerId]
            : {};
          return <ReviewCard key={review.id} reviewer={reviewer} {...reviewInfo} />;
        })
        : <NoResultsCard title="No reviews for this class yet..." icon={<FaRegFrown />} />
  );

  return (
    <>
      <NavBar />
      <Container className="Reviews">
        <BackButton />
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
        {renderReviews()}
        <Link to={`/write/${classId}`}>
          <Button size="lg" block>Write a Review</Button>
        </Link>
        <br />
      </Container>

      {isQuestionsActive ? <Redirect to={`/questions/${classId}`} /> : null}
    </>
  );
}
