import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

export default function ClassStats(props) {
  const { quarter, avgGrade, percentRecommend } = props;

  return (
    <Card className="ClassStats">
      <Card.Body>
        <Card.Subtitle>{quarter}</Card.Subtitle>
        <br />
        <Card.Title>
          <span className="ClassStats-stat">{avgGrade}</span>
          {'  '}
          Average Grade
        </Card.Title>
        <Card.Title>
          <span className="ClassStats-stat">
            {percentRecommend}
            %
          </span>
          {' '}
          recommend this class
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

ClassStats.propTypes = {
  quarter: PropTypes.string.isRequired,
  avgGrade: PropTypes.string.isRequired,
  percentRecommend: PropTypes.number.isRequired,
};
