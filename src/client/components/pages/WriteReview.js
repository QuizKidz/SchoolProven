import React, { useContext, useState, useEffect } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import ReviewPageHeader from '../reviews/ReviewPageHeader';
import StarRatings from '../shared/StarRatings';
import ReviewSection from '../write/ReviewSection';

import UserContext from '../../utils/UserContext';

import classes from '../../data/classes.json';
import reviews from '../../data/reviews.json';

export default function WriteReview() {
  const { classId } = useParams();

  const loggedInUser = useContext(UserContext);
  const [hasSubmitted, changeHasSubmitted] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);

  useEffect(() => window.scrollTo(0, 0), []);

  const currentClass = classes[classId];
  const {
    professorName,
    className,
    classCode,
  } = currentClass;

  const renderHeaders = () => (
    <>
      <h1 className="WriteReview-header">Provide your Opinion</h1>
      <Card className="WriteReview-class-header">
        <ReviewPageHeader
          professorName={professorName}
          className={className}
          classCode={classCode}
        />
      </Card>
    </>
  );

  const renderRating = () => (
    <div className="WriteReview-section">
      <h4 className="WriteReview-section-title">Rating</h4>
      <StarRatings large rating={reviewRating} onClick={rating => () => setReviewRating(rating)} />
    </div>
  );

  const renderTags = () => (
    <div className="WriteReview-section">
      <h4 className="WriteReview-section-title">Tags</h4>
      <br />
      <h6 className="WriteReview-section-title">Professor</h6>
      <ToggleButtonGroup type="checkbox" name="profTags">
        <ToggleButton value={0}>Writes Legibly</ToggleButton>
        <ToggleButton value={1}>Speaks Clearly</ToggleButton>
        <ToggleButton value={2}>Great Lecturer</ToggleButton>
        <ToggleButton value={3}>Tough Grader</ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />
      <h6 className="WriteReview-section-title">Class</h6>
      <ToggleButtonGroup type="checkbox" name="profTags">
        <ToggleButton value={0}>Test Heavy</ToggleButton>
        <ToggleButton value={1}>Group Projects</ToggleButton>
        <ToggleButton value={2}>Weekly Assignments</ToggleButton>
        <ToggleButton value={3}>Pop Quizzes</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );

  const renderReviewInput = () => (
    <div className="WriteReview-section">
      <h4 className="WriteReview-section-title">Review</h4>
      <Form.Control
        required
        as="textarea"
        rows="3"
        size="md"
        placeholder="Provide your honest opinion."
        id="review"
      />
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    reviews.push(
      {
        id: reviews.length + 1,
        classId,
        rating: reviewRating,
        review: form.querySelector('#review').value,
        numLikes: 0,
        numDislikes: 0,
        reviewer: loggedInUser ? { ...loggedInUser, numReviews: 1 } : {}
      }
    );

    changeHasSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <Container className="WriteReview">
        <BackButton />
        {renderHeaders()}

        <Form onSubmit={handleSubmit}>
          {renderRating()}
          <ReviewSection
            title="Do you recommend this class?"
            name="recClass"
            selections={['Yes', 'No']}
          />
          <ReviewSection
            title="Do you recommend this professor?"
            name="recProf"
            selections={['Yes', 'No']}
          />
          <ReviewSection
            title="Grading"
            name="grading"
            selections={['Letter', 'Pass/No Pass']}
          />
          <ReviewSection
            title="Grade Received"
            name="gradeReceived"
            selections={['A', 'B', 'C', 'D', 'F', 'P', 'NP']}
          />
          <ReviewSection
            title="Why did you take the class?"
            name="classReason"
            selections={['Major', 'Minor', 'GE', 'Fun']}
          />
          <ReviewSection
            title="Is attendance mandatory?"
            name="attendance"
            selections={['Yes', 'No']}
          />
          <ReviewSection
            title="Is the class podcasted?"
            name="podcast"
            selections={['Yes', 'No']}
          />
          <ReviewSection
            title="What was the workload like?"
            name="workload"
            selections={['Low', 'Medium', 'High']}
          />
          {renderTags()}
          {renderReviewInput()}
          <Button type="submit" size="lg" block>Submit</Button>
        </Form>
        <br />
      </Container>

      {hasSubmitted ? <Redirect to={`/reviews/${classId}`} /> : null}
    </>
  );
}
