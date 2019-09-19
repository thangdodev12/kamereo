import styled from "styled-components";
import colors from '../Utils/colors';

const MegaMenuStyle = styled.div`
  .store {
    padding: 30px 22px;
    border-bottom: 1px solid ${colors.gray};

    a {
      display: inline-block;
      margin-top: 30px;
      margin-left: 50px;
      font-size: 12px;
      color: ${colors.blue};
    }
  
    .info {
      position: relative;
      font-size: 16px;
      padding: 0 50px;
  
      img {
        position: absolute;
        top:50%;
        left: 0;
        transform: translateY(-32%);
        width: 36px;
        height: 36px;
        border-radius: 100%;
      }
  
      .address {
        position: absolute;
        left: 50px;
        top: 18px;
        font-size: 10px;
        color: ${colors.gray};
      }
    }
  }

  .favorite {
    padding: 30px 22px;
    border-bottom: 1px solid ${colors.gray};

    p {
      position: relative;
      color: ${colors.red};
      padding-left: 50px;
      i {
        position: absolute;
        font-size: 24px;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .menu {
    padding: 15px 22px;

    .list {
      padding-left: 4px;

      p {
        padding: 15px 0;
      }
    }

    .sub-list {
      a {
        display: block;
        position: relative;
        padding: 15px 48px;
        color: ${colors.gray2};

        &:hover {
          color: ${colors.green};
        }

        svg {
          position: absolute;
          left: 0;
          width: 22px;
        }
      }
    }
  }
`;

export default MegaMenuStyle;
