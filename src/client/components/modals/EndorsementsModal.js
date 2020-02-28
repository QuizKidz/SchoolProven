import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import users from '../../data/users.json';

const endorsementMessages = {
  helpful: 'You write helpful reviews!',
  friendly: 'You are a friendly reviewer!',
  received: 'Your reviews are well received!',
  timely: 'You respond in a timely manner!',
};

export default function EndorsementsModal(props) {
  const {
    show, onHide, userId
  } = props;

  const [activeKey, setActiveKey] = useState('');

  const user = users[userId];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { endorsements } = user;

    let isNewEndorsement = true;
    const updatedEndorsements = endorsements.map((endorsement) => {
      const isSelectedEndorsement = endorsement.message === endorsementMessages[activeKey];
      isNewEndorsement = isSelectedEndorsement ? false : isNewEndorsement;

      return {
        message: endorsement.message,
        count: isSelectedEndorsement ? endorsement.count + 1 : endorsement.count,
      };
    });

    if (isNewEndorsement) {
      updatedEndorsements.push({ message: endorsementMessages[activeKey], count: 1 });
    }

    users[userId].endorsements = updatedEndorsements;
    setActiveKey('');
    onHide();
  };

  const renderEndorseForm = () => (
    <Form onSubmit={handleSubmit}>
      <ListGroup variant="flush" activeKey={activeKey}>
        {Object.keys(endorsementMessages).map(messageKey => (
          <ListGroup.Item
            action
            type="button"
            key={messageKey}
            eventKey={messageKey}
            onClick={() => setActiveKey(messageKey)}
          >
            {endorsementMessages[messageKey]}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal.Body>
        <Button block type="submit">Endorse!</Button>
      </Modal.Body>
    </Form>
  );

  return (
    <div className="EndorsementsModal">
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <h5>Select an endorsement to give</h5>
        </Modal.Header>
        {renderEndorseForm()}
      </Modal>
    </div>
  );
}

EndorsementsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
