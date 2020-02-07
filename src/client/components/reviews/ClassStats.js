import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

export default function ClassStats(props) {
  const { avgGrade, percentRecommend } = props;

  return (
    <Card className="ClassStats">
      <Card.Body>
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
  avgGrade: PropTypes.string.isRequired,
  percentRecommend: PropTypes.number.isRequired,
};
