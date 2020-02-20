import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

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

import reviews from '../../data/reviews.json';
import classes from '../../data/classes.json';

export default function Reviews() {
  const [isQuestionsActive, setQuestionsActive] = useState(false);

  const currentClass = classes[0];
  const {
    professorName,
    className,
    classCode,
    classRating,
    avgGrade,
    percentRecommend
  } = currentClass;

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
        <StarRatings rating={classRating} stat="(100)" />
        <ClassStats avgGrade={avgGrade} percentRecommend={percentRecommend} />
        <ReviewBreakdown ratingBreakdowns={['70%', '11%', '8%', '4%', '7%']} />
        <h5>Reviews</h5>
        {
          reviews.map(review => <ReviewCard key={review.id} {...review} />)
        }
      </Container>

      {isQuestionsActive ? <Redirect to="/questions" /> : null}
    </>
  );
}
