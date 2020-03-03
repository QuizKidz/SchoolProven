import React, { useState } from 'react';
import ReactGA from 'react-ga';
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
  const [validated, setValidated] = useState(false);
  const [invalidSubmit, setInvalidSumbit] = useState(false);

  const user = users[userId];

  const handleClose = () => {
    onHide();
    setActiveKey('');
    setInvalidSumbit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validated) {
      setInvalidSumbit(true);
      return;
    }

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
    handleClose();

    ReactGA.event({
      category: 'endorse',
      action: 'add endorsement',
      value: user.id
    });
  };

  const handleEndorsementClick = messageKey => () => {
    setActiveKey(messageKey);
    setValidated(true);
  };

  const renderEndorseForm = () => (
    <Form onSubmit={handleSubmit} validated={validated}>
      <ListGroup variant="flush" activeKey={activeKey}>
        {Object.keys(endorsementMessages).map(messageKey => (
          <ListGroup.Item
            action
            type="button"
            key={messageKey}
            eventKey={messageKey}
            onClick={handleEndorsementClick(messageKey)}
          >
            {endorsementMessages[messageKey]}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal.Body>
        {invalidSubmit ? (
          <>
            <h6 className="InvalidMessage">Please choose an endorsement</h6>
            <br />
          </>
        ) : null}
        <Button block type="submit">Endorse!</Button>
      </Modal.Body>
    </Form>
  );

  return (
    <div className="EndorsementsModal">
      <Modal
        show={show}
        onHide={handleClose}
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
