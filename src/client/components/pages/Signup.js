import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';

export default function Signup() {
  return (
    <div className="Signup">
      <NavBar />
      <Container>
        <BackButton to="/" />
        <br />
        <br />
        <h1>
          Create your
          {' '}
          <span style={{ color: '#149650' }}>Proven</span>
          {' '}
          Profile
        </h1>
        <Card className="Signup-form">
          <Form autoComplete="on" noValidate>
            <Form.Group as={Row} controlId="email">
              <Form.Label column md={2}>
                Email
              </Form.Label>
              <Col md={10}>
                <InputGroup>
                  <Form.Control type="email" />
                  <InputGroup.Append>
                    <InputGroup.Text>@ucsd.edu</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="password">
              <Form.Label column md={2}>
                Password
              </Form.Label>
              <Col md={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <br />
            <br />

            <Form.Group as={Row}>
              <Col>
                <Form.Label>
                  Major
                </Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>
                  Year
                </Form.Label>
                <Form.Control as="select">
                  <option>-</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th+</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </Card>

        <Card className="Signup-form">
          <Form>
            <Form.Group as={Row} controlId="classes">
              <Form.Label column md={2}>
                Classes Taken
              </Form.Label>
              <Col md={10}>
                <InputGroup>
                  <Form.Control type="email" />
                  <InputGroup.Append>
                    <Button variant="secondary">+</Button>
                  </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">
                  Add classes you&apos;ve previously taken so you can review them later. (Optional)
                </Form.Text>
              </Col>
            </Form.Group>
          </Form>
        </Card>

        <Button size="lg" block>Sign Up</Button>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
