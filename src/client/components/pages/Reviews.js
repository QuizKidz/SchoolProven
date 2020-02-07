import React from 'react';

import Container from 'react-bootstrap/Container';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import ReviewPageHeader from '../reviews/ReviewPageHeader';
import StarRatings from '../shared/StarRatings';
import ClassStats from '../reviews/ClassStats';
import ReviewBreakdown from '../reviews/ReviewBreakdown';
import ReviewCard from '../shared/ReviewCard';

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      review: 'Project based class utilizing web based technologies; very similar to what you would get in some software engineering courses. Klemmer was pretty cool and the things he taught were interesting. You\'ll do well in the class if you put effort in your project. Overall, I really enjoyed the class and learned a lot about user interaction and design.',
      numLikes: 4,
      numDislikes: 0,
      reviewer: {
        major: 'Cognitive Science',
        year: '3rd',
        numReviews: 6
      }
    },
    {
      rating: 4,
      review: ' Most of the learning is done through your studio. I personally can say I learned a lot from the class. Expect to code.',
      numLikes: 3,
      numDislikes: 1,
      reviewer: {
        major: 'Computer Science',
        year: '4th',
        numReviews: 12
      }
    },
  ];

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
          // eslint-disable-next-line react/no-array-index-key
          reviews.map((review, i) => <ReviewCard key={i} {...review} />)
        }
      </Container>
    </>
  );
}
