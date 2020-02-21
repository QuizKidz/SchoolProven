import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

import {
  FaUser, FaUserGraduate, FaThumbsUp, FaThumbsDown
} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdVerifiedUser } from 'react-icons/md';

import StarRatings from './StarRatings';

export default function ReviewCard(props) {
  const [show, setShow] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);

  const {
    rating, review, reviewer, numLikes, numDislikes
  } = props;
  const { major, year, numReviews } = reviewer;

  const renderEmptyReviewerInfo = () => (
    <Col className="ReviewCard-reviewer">
      <Row className="ReviewCard-reviewer-icon-anon"><FaUser /></Row>
    </Col>
  );

  const renderReviewerInfo = () => (Object.keys(reviewer).length === 0 ? renderEmptyReviewerInfo()
    : (
      <Col className="ReviewCard-reviewer">
        <Link to={`/profile/${reviewer.id}`}>
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
        </Link>
        <Row className="ReviewCard-reviewer-badge">
          <Badge pill variant="success" onClick={() => setShow(true)}>
            <MdVerifiedUser />
            {' '}
            Proven
          </Badge>
        </Row>
      </Col>
    ));

  const renderReviewReacts = () => (
    <div className="ReviewCard-review-react">
      <div className="ReviewCard-review-react-likes">
        <FaThumbsUp />
        {' '}
        {numLikes}
      </div>
      <div className="ReviewCard-review-react-dislikes">
        <FaThumbsDown />
        {' '}
        {numDislikes}
      </div>
    </div>
  );

  const renderComments = () => (
    <>
      <Accordion.Toggle
        as={Button}
        variant="light"
        eventKey="0"
        className="ReviewCard-comment-toggle"
        onClick={() => setCommentsOpen(!commentsOpen)}
      >
        {commentsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        {' '}
        3
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <>
          <Card.Body className="ReviewCard-comment">I agree, I learned a lot as well.</Card.Body>
          <Card.Body className="ReviewCard-comment">What was your project on?</Card.Body>
          <Card.Body className="ReviewCard-comment">You get to base your project on a theme determined by your studio.</Card.Body>
        </>
      </Accordion.Collapse>
    </>
  );

  const renderReview = () => (
    <Col className="ReviewCard-review">
      <StarRatings rating={rating} />
      <p className="ReviewCard-review-body">
        {review}
      </p>
      {renderReviewReacts()}
      {renderComments()}
    </Col>
  );

  const handleClose = () => { setShow(false); };

  const renderBadgeModal = () => (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        This badge indicates that this review was submitted
        by a user with a verified university email.
      </Modal.Body>
    </Modal>
  );

  return (
    <>
      <Accordion className="ReviewCard">
        <Card>
          <Card.Body>
            <Row>
              {renderReviewerInfo()}
              {renderReview()}
            </Row>
          </Card.Body>
        </Card>
      </Accordion>
      {renderBadgeModal()}
    </>
  );
}

ReviewCard.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  reviewer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    major: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    numReviews: PropTypes.number.isRequired,
  }).isRequired,
  numLikes: PropTypes.number.isRequired,
  numDislikes: PropTypes.number.isRequired,
};
