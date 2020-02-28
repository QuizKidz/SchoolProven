import React, { useState } from 'react';

import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

import { MdVerifiedUser } from 'react-icons/md';

export default function ReviewCard() {
  const [show, setShow] = useState(false);

  const renderBadgeModal = () => (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header>
        This badge indicates that this reviewer has a verified university email.
      </Modal.Header>
    </Modal>
  );

  return (
    <>
      <Badge pill variant="success" onClick={() => setShow(true)}>
        <MdVerifiedUser />
        {' '}
        Proven
      </Badge>
      {renderBadgeModal()}
    </>
  );
}
