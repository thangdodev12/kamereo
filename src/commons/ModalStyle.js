import styled from "styled-components";
import colors from "../Utils/colors";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${colors.gray2};
    opacity: 0.7;
  }

  .modal-body {
    position: absolute;
    overflow-y: auto;
    top: 20px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 90vw;
    z-index: 2;
    background-color: ${colors.white};
  }
`;

export default ModalStyle;
