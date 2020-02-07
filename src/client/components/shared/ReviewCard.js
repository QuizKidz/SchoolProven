import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUserGraduate, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import StarRatings from './StarRatings';

export default function ReviewCard(props) {
  const {
    rating, review, reviewer, numLikes, numDislikes
  } = props;
  const { major, year, numReviews } = reviewer;

  const renderNumLikes = () => (
    <div className="ReviewCard-review-react-likes">
      <FaThumbsUp />
      {' '}
      {numLikes}
    </div>
  );

  const renderNumDislikes = () => (
    <div className="ReviewCard-review-react-dislikes">
      <FaThumbsDown />
      {' '}
      {numDislikes}
    </div>
  );

  return (
    <Card className="ReviewCard">
      <Card.Body>
        <Row>
          <Col className="ReviewCard-reviewer">
            <Row className="ReviewCard-reviewer-icon"><FaUserGraduate /></Row>
            <Row className="ReviewCard-reviewer-info">
              <Card.Subtitle>{major}</Card.Subtitle>
              <Card.Subtitle>
                {year}
                {' '}
                year
              </Card.Subtitle>
              <Card.Subtitle>
                {numReviews}
                {' '}
                reviews
              </Card.Subtitle>
            </Row>
          </Col>

          <Col className="ReviewCard-review">
            <StarRatings rating={rating} />
            <p className="ReviewCard-review-body">
              {review}
            </p>
            <div className="ReviewCard-review-react">
              {renderNumLikes()}
              {renderNumDislikes()}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

ReviewCard.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  reviewer: PropTypes.shape({
    major: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    numReviews: PropTypes.number.isRequired,
  }).isRequired,
  numLikes: PropTypes.number.isRequired,
  numDislikes: PropTypes.number.isRequired,
};
