import React from 'react';

import Container from 'react-bootstrap/Container';

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
  const currentClass = classes[0];
  const {
    professorName,
    classTitle,
    classCode,
    classRating,
    avgGrade,
    percentRecommend
  } = currentClass;

  return (
    <>
      <NavBar />
      <Container className="Reviews">
        <BackButton to="/search" />
        <ReviewPageHeader
          professorName={professorName}
          classTitle={classTitle}
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
    </>
  );
}
