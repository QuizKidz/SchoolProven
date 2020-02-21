import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import handleSearch from '../../utils/handleSearch';

import questions from '../../data/questions.json';

export default function Questions() {
  const [isReviewsActive, setReviewsActive] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [searchResults, setSearchResults] = useState(questions);
  const [noResults, setNoResults] = useState(false);

  const handleToggleChange = (value) => {
    setReviewsActive(value === 0);
  };

  const handleSearchInput = (e) => {
    handleSearch(e, questions, questions, setSearchResults, setNoResults, ['question']);
  };

  const handleAnswerSubmit = questionIndex => (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    questions[questionIndex].answers.push(form.querySelector('#answer').value);
    form.querySelector('#answer').value = '';
    setSubmitCount(submitCount + 1);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    questions.push({
      question: form.querySelector('#question').value,
      answers: []
    });
    form.querySelector('#question').value = '';
    setSubmitCount(submitCount + 1);
  };

  const renderToggle = () => (
    <div className="Reviews-toggle">
      <ToggleButtonGroup
        type="radio"
        name="PageToggle"
        defaultValue={1}
        size="lg"
        onChange={handleToggleChange}
      >
        <ToggleButton value={0} variant="light">Reviews</ToggleButton>
        <ToggleButton value={1} variant="light">Q & A</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );

  const renderHeader = () => (
    <div className="Questions-header">
      <h4>Questions</h4>
      <SearchBar
        className="Reviews-SearchBar"
        placeholder="Search Questions"
        onInput={handleSearchInput}
      />
    </div>
  );

  const renderAnswerInput = questionIndex => (
    <Accordion>
      <Container>
        <Accordion.Toggle eventKey="answerInput" as="div">
          <h6 className="Questions-answer-input-header">Answer this Question</h6>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="answerInput">
          <Form onSubmit={handleAnswerSubmit(questionIndex)}>
            <Form.Control
              required
              as="textarea"
              id="answer"
              className="Questions-answer-input"
            />
            <Button type="submit" size="lg" block>Submit</Button>
            <br />
          </Form>
        </Accordion.Collapse>
      </Container>
    </Accordion>
  );

  const renderQuestions = () => (
    noResults
      ? <NoResultsCard className="Questions-NoResultsCard" />
      : (
        <Accordion className="Questions-content">
          {searchResults.map((question, i) => {
            const cardProps = {
              // bg: question.answers.length > 0 ? '' : 'danger',
              className: question.answers.length > 0 ? '' : 'Questions-unanswered',
              // text: question.answers.length > 0 ? '' : 'white'
            };

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={i} {...cardProps}>
                <Accordion.Toggle as={Card.Header} eventKey={i}>
                  {question.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={i}>
                  <>
                    {question.answers.map(answer => (
                      <>
                        <Card.Body>
                          {answer}
                        </Card.Body>
                        <hr />
                      </>
                    ))}
                    {renderAnswerInput(i)}
                  </>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      )
  );

  const renderQuestionInput = () => (
    <Accordion>
      <Card>
        <Accordion.Toggle eventKey="questionInput" as={Card.Header}>
          <h5>Ask a Question</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="questionInput">
          <Form onSubmit={handleQuestionSubmit}>
            <Form.Control
              required
              as="textarea"
              id="question"
            />
            <Button type="submit" size="lg" block>Submit</Button>
          </Form>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  return (
    <>
      <NavBar />
      <Container className="Questions">
        <BackButton to="/search" />
        <br />
        {renderToggle()}
        {renderHeader()}
        {renderQuestions()}
        {renderQuestionInput()}
      </Container>

      {isReviewsActive ? <Redirect to="/reviews" /> : null}
    </>
  );
}
