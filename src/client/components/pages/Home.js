import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

import { FaSearch, FaPenFancy, FaUserGraduate } from 'react-icons/fa';

import Logo from '../shared/Logo';
import LoginModal from '../modals/LoginModal';

import UserContext from '../../utils/UserContext';

import users from '../../data/users.json';

export default function Home(props) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'optimize.activate' });
  }, []);

  const [loginShow, setLoginShow] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);

  const loggedInUser = useContext(UserContext);
  const { setUser } = props;

  const handleLogin = (email, password) => {
    let userToLogIn = null;
    users.forEach((user) => {
      if (user.email.toLowerCase() === email.toLowerCase()
      && user.password === password) {
        userToLogIn = user;
      }
    });

    if (userToLogIn) {
      setUser(userToLogIn);
      setShowLoginToast(true);
      setShowLogoutToast(false);
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setUser(null);
    setShowLoginToast(false);
    setShowLogoutToast(true);
  };

  const renderLoggedOutOptions = () => (
    <>
      <Button variant="outline-primary" size="lg" onClick={() => setLoginShow(true)} block>Log in</Button>
      <br />
      <Link to="/signup">
        <Button variant="primary" size="lg" block>Sign up</Button>
      </Link>
    </>
  );

  const renderLoggedInOptions = () => (
    <>
      <Link to={`/profile/${loggedInUser.id}`}>
        <Button variant="primary" size="lg" block>
          <FaUserGraduate />
          {' '}
          My Profile
        </Button>
      </Link>
      <br />
      <Button variant="outline-primary" size="lg" onClick={handleLogout} block>Log out</Button>
      <br />
    </>
  );

  const renderLoginToast = () => (
    <Toast
      className="HomeToast"
      show={showLoginToast}
      autohide
      onClose={() => setShowLoginToast(false)}
    >
      <Toast.Header>
        <strong className="mr-auto">Successfully Logged In!</strong>
      </Toast.Header>
    </Toast>
  );

  const renderLogoutToast = () => (
    <Toast
      className="HomeToast"
      show={showLogoutToast}
      autohide
      onClose={() => setShowLogoutToast(false)}
    >
      <Toast.Header>
        <strong className="mr-auto">Successfully Logged Out!</strong>
      </Toast.Header>
    </Toast>
  );

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
            <Link to="/write">
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

        {loggedInUser ? renderLoggedInOptions() : renderLoggedOutOptions()}
      </Container>

      <LoginModal show={loginShow} onHide={() => setLoginShow(false)} onLogin={handleLogin} />

      {renderLoginToast()}
      {renderLogoutToast()}
    </div>
  );
}

Home.propTypes = {
  setUser: PropTypes.func.isRequired,
};
