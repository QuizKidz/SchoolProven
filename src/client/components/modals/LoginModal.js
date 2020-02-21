import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const { show, onHide, onLogin } = props;

  const handleLogin = () => {
    if (onLogin(email, password)) {
      onHide();
    } else {
      setInvalidLogin(true);
    }
  };

  const renderLoginForm = () => (
    <Form>
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
        </Col>
      </Form.Group>

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

      {invalidLogin ? <h6 className="InvlaidLogin">Invalid email or password.</h6> : null}
    </Form>
  );

  return (
    <div className="LoginModal">
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {renderLoginForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleLogin} size="lg" block>Log in</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};
