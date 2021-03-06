import React from 'react';
import PropTypes from 'prop-types';

import { FaUserTie } from 'react-icons/fa';
import { MdClass, MdSubject } from 'react-icons/md';

export default function ReviewPageHeader(props) {
  const { professorName, className, classCode } = props;

  return (
    <div className="ReviewPageHeader">
      <h1>
        <FaUserTie className="ReviewPageHeader-icon" />
        {' '}
        {professorName}
      </h1>
      <h2>
        <MdClass className="ReviewPageHeader-icon" />
        {' '}
        {className}
      </h2>
      <h2>
        <MdSubject className="ReviewPageHeader-icon" />
        {' '}
        {classCode}
      </h2>
    </div>
  );
}

ReviewPageHeader.propTypes = {
  professorName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
};
