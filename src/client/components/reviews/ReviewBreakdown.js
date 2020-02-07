import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import StarRatings from '../shared/StarRatings';

export default function ReviewBreakdown(props) {
  const { ratingBreakdowns } = props;

  const renderBreakdowns = () => ratingBreakdowns.map(
    (breakdown, index) => (
      <StarRatings
        // eslint-disable-next-line react/no-array-index-key
        key={ratingBreakdowns.length - index}
        rating={ratingBreakdowns.length - index}
        stat={breakdown}
      />
    )
  );

  return (
    <Card className="ReviewBreakdown">
      <Card.Body>
        <Card.Title>
          Review Breakdown
        </Card.Title>
        {renderBreakdowns()}
      </Card.Body>
    </Card>
  );
}

ReviewBreakdown.propTypes = {
  ratingBreakdowns: PropTypes.arrayOf(PropTypes.string).isRequired,
};
