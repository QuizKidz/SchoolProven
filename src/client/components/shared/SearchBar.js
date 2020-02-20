import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props) {
  const { className, placeholder, onKeyDown } = props;

  return (
    <InputGroup className={className}>
      <InputGroup.Prepend>
        <InputGroup.Text><FaSearch /></InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control type="text" placeholder={placeholder} onKeyDown={onKeyDown} />
    </InputGroup>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  className: 'SearchBar'
};
