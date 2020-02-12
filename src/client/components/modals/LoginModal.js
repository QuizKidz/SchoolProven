import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
  const { onHide } = props;

  const renderLoginForm = () => (
    <Form>
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
    </Form>
  );

  return (
    <div className="LoginModal">
      <Modal
        {...props}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {renderLoginForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} size="lg" block>Log in</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
