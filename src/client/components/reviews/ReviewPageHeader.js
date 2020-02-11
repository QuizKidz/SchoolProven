import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewPageHeader(props) {
  const { professorName, classTitle, classCode } = props;

  return (
    <div className="ReviewPageHeader">
      <h1>{professorName}</h1>
      <h2>{classTitle}</h2>
      <h2>{classCode}</h2>
    </div>
  );
}

ReviewPageHeader.propTypes = {
  professorName: PropTypes.string.isRequired,
  classTitle: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
};
