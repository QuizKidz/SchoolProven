import React from 'react';

import Container from 'react-bootstrap/Container';
import ReviewPageHeader from '../reviews/ReviewPageHeader';
import StarRatings from '../shared/StarRatings';
import ClassStats from '../reviews/ClassStats';

export default function Reviews() {
  return (
    <Container className="Reviews">
      <ReviewPageHeader
        professorName="Scott Klemmer"
        classTitle="Interaction Design"
        className="COGS 120/CSE 170"
      />
      <StarRatings rating={4.5} totalCount={100} />
      <ClassStats avgGrade="A" percentRecommend={89} />
    </Container>
  );
}