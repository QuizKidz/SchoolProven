import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

export default function ClassStats(props) {
  const { avgGrade, percentRecommend } = props;

  return (
    <Card className="ClassStats">
      <Card.Body>
        <Card.Title>
          Average Grade:
          {'  '}
          {avgGrade}
        </Card.Title>
        <Card.Title>
          {percentRecommend}
          % recommend this class
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

ClassStats.propTypes = {
  avgGrade: PropTypes.string.isRequired,
  percentRecommend: PropTypes.number.isRequired,
};
