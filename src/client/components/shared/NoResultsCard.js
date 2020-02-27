import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';

export default function NoResultsCard(props) {
  const { className, title, icon } = props;

  return (
    <Card bg="light" border="light" className={className}>
      <Card.Body className="EmptySearchCard">
        <h3>{title}</h3>
        {icon}
      </Card.Body>
    </Card>
  );
}

NoResultsCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element
};

NoResultsCard.defaultProps = {
  className: 'NoResultsCard',
  title: 'No results found.',
  icon: <FaTimes />,
};
