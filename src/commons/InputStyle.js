import styled from "styled-components";
import colors from '../Utils/colors';

const InputStyle = styled.div`
  padding-bottom: 12px;

  label {
    display: inline-block;
    color: ${colors.gray2};
    font-size: 14px;
    margin-bottom: 12px;
  }

  input {
    border: 1px solid ${colors.gray2};
    width: calc(100% - 24px);
    padding: 12px;
    font-size: 12px;
    border-radius: 5px;

    &:focus,
    &:active {
      border-color: ${colors.blue};
    }
  }
`;

export default InputStyle;
