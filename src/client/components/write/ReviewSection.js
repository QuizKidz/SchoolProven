import React from 'react';
import PropTypes from 'prop-types';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ReviewSection(props) {
  const {
    title, name, selections, size
  } = props;

  return (
    <div className="WriteReview-section">
      <h4 className="WriteReview-section-title">{title}</h4>
      <ToggleButtonGroup type="radio" name={name} size={size}>
        {selections.map((selection, i) => (
          <ToggleButton value={i}>{selection}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

ReviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selections: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string,
};

ReviewSection.defaultProps = {
  size: 'lg',
};
