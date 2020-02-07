import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewPageHeader(props) {
  const { professorName, classTitle, className } = props;

  return (
    <div className="ReviewPageHeader">
      <h1>{professorName}</h1>
      <h2>{classTitle}</h2>
      <h2>{className}</h2>
    </div>
  );
}

ReviewPageHeader.propTypes = {
  professorName: PropTypes.string.isRequired,
  classTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
