import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './InputStyle';

const Input = ({
  id, name, onChange,
  label, type,
  required, value, placeholder,
}) => (
  <InputStyle>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      name={name || id}
      id={id}
      onChange={onChange}
      required={required}
      defaultValue={value}
      placeholder={placeholder}
    />
  </InputStyle>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  label: '',
  type: 'text',
  required: false,
  placeholder: '',
};

export default Input;
