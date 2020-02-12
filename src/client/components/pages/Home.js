import React from 'react';

import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      </Container>

      {/* <Link to="/search">
        <Button>Search</Button>
      </Link>
      <Button variant="primary">Write a Review</Button> */}
      {/* <div className="Home-background" id="shape1" />
      <div className="Home-background" id="shape2" />
      <div className="Home-background" id="shape3" /> */}
    </div>
  );
}
