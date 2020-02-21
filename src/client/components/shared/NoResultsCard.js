import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

export default function NoResultsCard(props) {
  const { className } = props;

  return (
    <Card bg="light" border="light" className={className}>
      <Card.Body className="EmptySearchCard">
        <h3>No results found.</h3>
        <FaTimes />
      </Card.Body>
    </Card>
  );
}

NoResultsCard.propTypes = {
  className: PropTypes.string,
};

NoResultsCard.defaultProps = {
  className: 'NoResultsCard',
};
