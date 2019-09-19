import styled from "styled-components";
import colors from '../Utils/colors';

const ToastStyle = styled.div`
  position: fixed;
  min-width: 150px;
  top: ${({ top }) => top !== '0' ? top : '100px'};
  padding: 15px 10px;
  background-color ${({ type }) => {
    switch (type) {
      case 'error': return colors.red;
      case 'success': return colors.green;
      default: return colors.white;
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'error': return colors.white;
      case 'success': return colors.white;
      default: return colors.black;
    }
  }};
  z-index: 999;

  &.left {
    left: ${({ left }) => left !== '0' ? left : '10px'};
  }

  &.right {
    right: ${({ right }) => right !== '0' ? right : '10px'};
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20px;
    height: 20px;
    background: transparent;
    transform: translateY(-50%);
    
    &:before,
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 15px;
      height: 1px;
      background-color: ${({ type }) => {
        switch (type) {
          case 'error': return colors.white;
          case 'success': return colors.white;
          default: return colors.black;
        }
      }};
    }

    &:before {
      transform: translate(-50%,-50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
`;

export default ToastStyle;
