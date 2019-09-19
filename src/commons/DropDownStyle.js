import styled from "styled-components";
import colors from '../Utils/colors';

const DropDownStyle = styled.div`
  .list {
    display: ${({ open }) => open ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    margin: 0;
    background-color: ${colors.white};
    width: 100%;
    font-size: 14px;
    box-shadow: 0px 3px 4px #ccc;
    z-index: 999;

    li {
      padding: 5px;

      a {
        color: ${colors.black};
      }

      &:hover {
        background-color: ${colors.green};
        a {
          color: ${colors.white};
        }
      }
    }
  }

  .label {
    font-size: 14px;
    background: transparent;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }

    i {
      margin-left: 20px;
    }
  }
`;

export default DropDownStyle;
