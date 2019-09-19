import styled from "styled-components";
import colors from '../Utils/colors';

const CardStyle = styled.div`
  padding: 16px 12px;
  border: 1px solid ${colors.gray};
  box-shadow: 0 0 4px ${colors.gray};
  border-radius: 5px;

  img {
    width: 100%;
  }

  .store-info,
  .red-invoice {
    margin-top: 24px;
  }

  ul {
    margin-top: 16px;

    li {
      font-size: 12px;
      padding: 10px 0;

      span.label {
        color: ${colors.gray2};
        display: inline-block;
        min-width: 120px;
      }
    }
  }

  .edit-card {
    margin: 20px 0;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 3px;
    background-color: ${colors.gray};
    transition: all ease .5s;

    &:hover {
      background-color: ${colors.green};
      color: ${colors.white};
    }
  }

  @media (min-width: 992px) {
    width: 350px;
  }
`;

export default CardStyle;
