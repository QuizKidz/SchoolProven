import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props) {
  const { className, placeholder, onInput } = props;

  return (
    <InputGroup className={className}>
      <InputGroup.Prepend>
        <InputGroup.Text><FaSearch /></InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control type="text" placeholder={placeholder} onInput={onInput} />
    </InputGroup>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  className: 'SearchBar'
};
