import styled from "styled-components";
import colors from '../Utils/colors';

const SelectStyle = styled.div`
  .custom-select {
    position: relative;
    border: 1px solid ${colors.gray2};
    border-radius: 5px;
    margin: 10px 0;
    text-align: left;

    &__text {
      display: block;
      position: relative;
      color: ${({ hasValue }) => hasValue ? colors.black : colors.gray2};
      font-size: 12px;
      padding: 12px;
      cursor : pointer;
    }

    &__options {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: ${colors.white};
      border: 1px solid ${colors.gray};
      box-shadow: 0 3px 4px 0 ${colors.gray};
      max-height: 300px;
      overflow: auto;
      z-index: 2;

      .custom-select-item {
        display: block;
        padding: 5px 10px;
        color: ${colors.black};
        font-size: 12px;
        cursor: pointer;

        &:hover {
          background-color: ${colors.green};
          color: ${colors.white};
        }
      }
    }
  }
`;

export default SelectStyle;
