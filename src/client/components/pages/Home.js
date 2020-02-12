import React from 'react';

import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FaSearch, FaPenFancy } from 'react-icons/fa';

import Logo from '../shared/Logo';

export default function Home() {
  return (
    <div className="Home">
      <Jumbotron>
        <Logo size="large" />
        <h1>SchoolProven</h1>
        <p>
          Research your classes with confidence!
        </p>
      </Jumbotron>

      <Container className="Home-content">
        <Row>
          <Col sm className="Home-content-column">
            <Link to="/search">
              <Card className="Home-content-button">
                <Card.Body>
                  <Card.Title>
                    <FaSearch />
                    {' '}
                    Search
                  </Card.Title>
                  <Card.Text>Find a course by professor, class name, or course code.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col sm className="Home-content-column">
            <Link to="/search">
              <Card className="Home-content-button">
                <Card.Body>
                  <Card.Title>
                    <FaPenFancy />
                    {' '}
                    Write a review
                  </Card.Title>
                  <Card.Text>Help others by reviewing a specific class.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        <br />
        <br />

        <Link to="/signup">
          <Button variant="outline-primary" size="lg" block>Sign up</Button>
        </Link>
        <br />
        <Link to="/signup">
          <Button variant="primary" size="lg" block>Log in</Button>
        </Link>
      </Container>
    </div>
  );
}
