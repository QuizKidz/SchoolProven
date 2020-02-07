import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FaBook } from 'react-icons/fa';
import StarRatings from '../shared/StarRatings';
import NavBar from '../shared/NavBar';

export default function Search() {
  const [isVisible, setVisibility] = useState(false);

  const className = 'COGS 120';
  const handleKeydown = (e) => {
    e.preventDefault();
    if (e.target.value !== className) {
      e.target.value += className.charAt(e.target.value.length);
    }
    if (e.target.value === className) {
      setVisibility(true);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="Search">
        <Form className="SearchBar">
          <Form.Group>
            <Form.Control type="text" placeholder="Search classes" onKeyDown={handleKeydown} />
          </Form.Group>
        </Form>
        {isVisible ? <ClassReviewCard /> : <EmptyReviewCard />}
      </Container>
    </>
  );
}

function EmptyReviewCard() {
  return (
    <Card bg="light" border="light">
      <Card.Body className="EmptyReviewCard">
        <FaBook />
      </Card.Body>
    </Card>
  );
}

function ClassReviewCard() {
  return (
    <Link to="/reviews">
      <Card className="ReviewCard">
        <Card.Body>
          <Row>
            <Col className="ReviewCard-reviewer">
              <Row className="ReviewCard-reviewer-icon"><FaBook /></Row>
              <Row className="ReviewCard-reviewer-info">
                <Card.Subtitle>Scott Klemmer</Card.Subtitle>
                <Card.Subtitle>Interaction Design</Card.Subtitle>
                <Card.Subtitle>COGS 120/CSE 170</Card.Subtitle>
              </Row>
            </Col>

            <Col className="ReviewCard-review">
              <StarRatings rating={4.5} />
              <br />
              <h5>
                <span className="ClassStats-stat">A</span>
                {'  '}
                Average Grade
              </h5>
              <h5>
                <span className="ClassStats-stat">
                  89
                  %
                </span>
                {' '}
                recommend this class
              </h5>
              <br />
              <Badge variant="secondary">Interesting Course</Badge>
              {' '}
              <Badge variant="secondary">Thought Provoking</Badge>
              {' '}
              <Badge variant="secondary">Smart Professor</Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
}
