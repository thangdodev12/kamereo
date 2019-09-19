import React from 'react';
import PropTypes from 'prop-types';

import ModalStyle from './ModalStyle';

const Modal = ({ id, children, toggle }) => (
  <ModalStyle id={id}>
    <div className="overlay" onClick={toggle} role="button" />
    <div className="modal-body">
      {children}
    </div>
  </ModalStyle>
);

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired, 
};

export default Modal;
