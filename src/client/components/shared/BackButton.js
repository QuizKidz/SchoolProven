import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton(props) {
  const { to } = props;

  return (
    <Link to={to} className="BackButton">
      <IoMdArrowRoundBack />
    </Link>
  );
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};
