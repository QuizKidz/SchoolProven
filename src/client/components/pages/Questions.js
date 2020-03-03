/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaQuestion, FaRegFrown } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdQuestionAnswer } from 'react-icons/md';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import SearchBar from '../shared/SearchBar';
import NoResultsCard from '../shared/NoResultsCard';

import handleSearch from '../../utils/handleSearch';

import questions from '../../data/questions.json';

export default function Questions() {
  useEffect(() => {
    ReactGA.set({ page: '/questions' });
  }, []);

  const { classId } = useParams();
  // eslint-disable-next-line eqeqeq
  const questionsForClass = questions.filter(question => question.classId == classId);

  const [isReviewsActive, setReviewsActive] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [searchResults, setSearchResults] = useState(questionsForClass);
  const [noResults, setNoResults] = useState(false);

  const handleToggleChange = (value) => {
    setReviewsActive(value === 0);
  };

  const handleSearchInput = (e) => {
    handleSearch(e, questionsForClass, questionsForClass, setSearchResults, setNoResults, ['question']);
  };

  const handleAnswerSubmit = questionIndex => (event) => {
    event.preventDefault();
    console.log(questions);
    const form = event.currentTarget;
    questions[questionIndex].answers.push(form.querySelector('#answer').value);
    setSubmitCount(submitCount + 1);
    form.reset();
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newQuestion = {
      id: questions.length,
      classId: parseInt(classId, 10),
      question: form.querySelector('#question').value,
      answers: []
    };

    questions.push(newQuestion);
    setSearchResults([...questionsForClass, newQuestion]);
    form.reset();
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
      <Card.Body className="Questions-answer-input">
        <Accordion.Toggle eventKey="answerInput" as="div" className="Questions-answer-input-header">
          <h6>Answer this Question</h6>
          <MdQuestionAnswer className="Questions-dropdown" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="answerInput">
          <Form onSubmit={handleAnswerSubmit(questionIndex)}>
            <br />
            <Form.Control
              required
              as="textarea"
              id="answer"
            />
            <br />
            <Button type="submit" size="lg" block>Submit</Button>
          </Form>
        </Accordion.Collapse>
      </Card.Body>
    </Accordion>
  );

  const renderQuestions = () => (
    // eslint-disable-next-line no-nested-ternary
    noResults
      ? <NoResultsCard className="Questions-NoResultsCard" />
      : searchResults.length > 0
        ? (
          <Accordion className="Questions-content">
            {searchResults.map((question, i) => {
              const headerClassName = `Questions-card-header ${question.answers.length > 0 ? '' : 'Questions-unanswered'}`;

              return (
                <Card key={i}>
                  <Accordion.Toggle as={Card.Header} eventKey={i} className={headerClassName}>
                    {question.question}
                    <FaQuestion className="Questions-dropdown" />
                    {/* <IoIosArrowDown className="Questions-dropdown" /> */}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={i}>
                    <>
                      {question.answers.map((answer, a) => (
                        <div key={a}>
                          <Card.Body className="Questions-answer">
                            {answer}
                          </Card.Body>
                          <hr />
                        </div>
                      ))}
                      {renderAnswerInput(question.id)}
                    </>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        )
        : <NoResultsCard title="No questions for this class yet..." icon={<FaRegFrown />} />
  );

  const renderQuestionInput = () => (
    <Accordion>
      <Card>
        <Accordion.Toggle eventKey="questionInput" as={Card.Header} className="Questions-card-header">
          <h5 className="Questions-ask-input-header">Ask a Question</h5>
          <IoIosArrowDown className="Questions-dropdown" />
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
        <BackButton />
        <br />
        {renderToggle()}
        {renderHeader()}
        {renderQuestionInput()}
        {renderQuestions()}
      </Container>

      {isReviewsActive ? <Redirect to={`/reviews/${classId}`} /> : null}
    </>
  );
}
