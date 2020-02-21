import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FaBook } from 'react-icons/fa';
import StarRatings from '../shared/StarRatings';

export default function SearchResultCard(props) {
  const {
    professorName,
    className,
    classCode,
    classRating,
    classStats,
    tags,
    linkTo,
  } = props;

  const { avgGrade, percentRecommend } = classStats;

  return (
    <Link to={linkTo}>
      <Card className="ReviewCard">
        <Card.Body>
          <Row>
            <Col className="ReviewCard-reviewer">
              <Row className="ReviewCard-reviewer-icon"><FaBook /></Row>
              <Row className="ReviewCard-reviewer-info">
                <Card.Subtitle>{professorName}</Card.Subtitle>
                <Card.Subtitle>{className}</Card.Subtitle>
                <Card.Subtitle>{classCode}</Card.Subtitle>
              </Row>
            </Col>

            <Col className="ReviewCard-review">
              <StarRatings rating={classRating} />
              <br />
              <h5>
                <span className="ClassStats-stat">{avgGrade}</span>
                {'  '}
                Average Grade
              </h5>
              <h5>
                <span className="ClassStats-stat">
                  {percentRecommend}
                  %
                </span>
                {' '}
                recommend this class
              </h5>
              <br />
              {tags.map(tag => (
                <span key={tag}>
                  <Badge variant="secondary">{tag}</Badge>
                  {' '}
                </span>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}

SearchResultCard.propTypes = {
  professorName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
  classRating: PropTypes.number.isRequired,
  classStats: PropTypes.shape({
    avgGrade: PropTypes.string.isRequired,
    percentRecommend: PropTypes.number.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkTo: PropTypes.string.isRequired,
};
