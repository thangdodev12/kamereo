import styled from "styled-components";
import colors from '../Utils/colors';

const CheckboxStyle = styled.div`
  input {
    opacity: 0;
    position: absolute;
		z-index: 12;

    &:focus,
    &:checked {
      outline: none !important;
    }

    &:checked + label {
      color: ${colors.black};
      border: 1px solid ${colors.black};

      &:before {
        boder: none;
        background-color: ${colors.green};
      }

      &:after {
        content: '✓';
        position: absolute;
        top: 49%;
        left: -23px;
        color: ${colors.white};
        transform: translateY(-50%);
      }
    }
  }

  label {
    display: block;
    position: relative;
    margin: 20px 0 20px 24px;
    padding: 12px;
    border: 1px solid ${colors.gray};
    border-radius: 3px;
    color: ${colors.gray};

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -24px;
      transform: translateY(-50%);
      border: 1px solid ${colors.gray};
      width: 14px;
      height: 14px;
    }
  }
`;

export default CheckboxStyle