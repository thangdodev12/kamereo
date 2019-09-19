import React from 'react';
import PropTypes from 'prop-types';
import CheckboxStyle from './CheckboxStyle';

const Checkbox = ({ label, id, onChange, className, name, checked }) => (
  <CheckboxStyle className={className}>
    <input type="checkbox" name={name || id} id={id} onChange={onChange} checked={checked} />
    <label htmlFor={id}>
      {label}
    </label>
  </CheckboxStyle>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: () => {},
  className: '',
  name: '',
  checked: false,
};

export default Checkbox;
