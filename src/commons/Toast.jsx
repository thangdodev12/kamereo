import React from 'react';

import ToastStyle from './ToastStyle';

class Toast extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  componentWillReceiveProps({ isOpen, toggleToast }) {
    clearTimeout(this.timer);
    if (isOpen) {
      this.timer = setTimeout(() => {
        toggleToast();
      }, 1000);
    }
  }

  render() {
    const { children, type, left, top, position, right, isOpen, toggleToast } = this.props;

    if (!isOpen) {
      return '';
    }

    return (
      <ToastStyle className={position} type={type} left={left} top={top} right={right} >
        <button onClick={toggleToast} />
        {children}
      </ToastStyle>
    );
  }
}

Toast.defaultProps = {
  type: 'notice',
  left: '100%',
  top: '0', 
  position: 'right',
  right: '0',
};

export default Toast;

const newToast = new Toast();

export const toast = newToast.toggleToast;