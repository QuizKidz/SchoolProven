import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';

import users from '../../data/users.json';

export default function Signup(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [major, setMajor] = useState(null);
  const [year, setYear] = useState(null);
  // const [classesTaken, setclassesTaken] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const { setUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length,
      email,
      password,
      major,
      year,
      classesTaken: []
    };

    setUser(newUser);
    users.push(newUser);
    setSubmitted(true);
  };

  const renderEmailField = () => (
    <Form.Group as={Row} controlId="email">
      <Form.Label column md={2}>
        Email
      </Form.Label>
      <Col md={10}>
        <InputGroup>
          <Form.Control
            required
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text>@ucsd.edu</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Col>
    </Form.Group>
  );

  const renderPasswordField = () => (
    <Form.Group as={Row} controlId="password">
      <Form.Label column md={2}>
        Password
      </Form.Label>
      <Col md={10}>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Col>
    </Form.Group>
  );

  const renderMajorField = () => (
    <Col>
      <Form.Label>
        Major
      </Form.Label>
      <Form.Control
        required
        type="text"
        value={major}
        onChange={e => setMajor(e.target.value)}
      />
    </Col>
  );

  const renderYearField = () => (
    <Col>
      <Form.Label>
        Year
      </Form.Label>
      <Form.Control
        required
        as="select"
        value={year}
        onChange={e => setYear(e.target.value)}
      >
        <option disabled selected>-</option>
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
        <option>5th+</option>
      </Form.Control>
    </Col>
  );

  const renderClassesTakenField = () => (
    <Form.Group as={Row} controlId="classes">
      <Form.Label column md={2}>
        Classes Taken
      </Form.Label>
      <Col md={10}>
        <InputGroup>
          <Form.Control type="text" />
          <InputGroup.Append>
            <Button variant="secondary">+</Button>
          </InputGroup.Append>
        </InputGroup>
        <Form.Text className="text-muted">
          Add classes you&apos;ve previously taken so you can review them later. (Optional)
        </Form.Text>
      </Col>
    </Form.Group>
  );

  return (
    <div className="Signup">
      <NavBar />
      <Container>
        <BackButton />
        <br />
        <br />
        <h1>
          Create your
          {' '}
          <span style={{ color: '#149650' }}>Proven</span>
          {' '}
          Profile
        </h1>

        <Form autoComplete="on" onSubmit={handleSubmit}>
          <Card className="Signup-form">
            <Card.Body>
              {renderEmailField()}
              {renderPasswordField()}
              <br />
              <br />
              <Form.Group as={Row}>
                {renderMajorField()}
                {renderYearField()}
              </Form.Group>
            </Card.Body>
          </Card>

          <Card className="Signup-form">
            <Card.Body>
              {renderClassesTakenField()}
            </Card.Body>
          </Card>
          <Button type="submit" size="lg" block>Sign Up</Button>
        </Form>
        <br />
        <br />
        <br />
      </Container>

      {submitted ? <Redirect to="/" /> : null}
    </div>
  );
}

Signup.propTypes = {
  setUser: PropTypes.func.isRequired,
};
