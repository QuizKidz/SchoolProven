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

export default function Reviews() {
  return (
    <>
      <NavBar />
      <Container className="Reviews">
        <BackButton to="/search" />
        <ReviewPageHeader
          professorName="Scott Klemmer"
          classTitle="Interaction Design"
          className="COGS 120/CSE 170"
        />
        <StarRatings rating={4.5} stat="(100)" />
        <ClassStats avgGrade="A" percentRecommend={89} />
        <ReviewBreakdown ratingBreakdowns={['70%', '11%', '8%', '4%', '7%']} />
        <h5>Reviews</h5>
        {
          reviews.map(review => <ReviewCard key={review.id} {...review} />)
        }
      </Container>
    </>
  );
}
