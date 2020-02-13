import React from 'react';
import PropTypes from 'prop-types';

import { FaUserTie } from 'react-icons/fa';
import { MdClass, MdSubject } from 'react-icons/md';

export default function ReviewPageHeader(props) {
  const { professorName, classTitle, classCode } = props;

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
        {classTitle}
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
  classTitle: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
};
