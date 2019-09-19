import styled from "styled-components";
import colors from '../Utils/colors';

const InfomationStyle = styled.div`
  margin: 50px 0;

  .default-message {
    padding: 16px;
    border: 1px solid ${colors.gray};
    box-shadow: 0 0 4px ${colors.gray};
    border-radius: 5px;
    margin-top: 20px;
    max-width: 700px;

    .message {
      margin: 12px 0;
    }

    .delivery-title {
      font-weight: 400;
    }

    .update-message {
      margin: 12px 0;
      padding: 12px 36px;
      font-size: 16px;
      border-radius: 3px;
      background-color: ${colors.gray};
      transition: all ease .5s;

      &:hover {
        background-color: ${colors.green};
        color: ${colors.white};
      }
    }
  }

  .edit-form {
    width: 90vw;

    .err-meg {
      color: ${colors.red};
      font-style: italic;
      font-size: 11px;
    }

    .form-header {
      padding: 20px;
      border-bottom: 1px solid ${colors.gray};

      p {
        color: ${colors.black};
      }

      svg {
        color: ${colors.green};
        width: 14px;
        margin-right: 12px;
      }
    }

    .form-body {
      padding: 20px;

      &__left {

        &__title {
          margin-bottom: 20px;
        }

        img {
          width: 100%;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        input {
          display: none;
        }

        .edit-image {
          overflow: hidden;

          label,
          .btn-reset {
            float: right;
          }

          label {
            font-size: 12px;
            background-color: ${colors.gray};
            boder-radius: 3px;
            padding: 12px 16px;

            &:hover {
              color: ${colors.white};
              background-color: ${colors.green};
            }
          }

          .btn-reset {
            padding: 12px 16px;

            &:hover {
              color: ${colors.red};
            }
          }
        }
      }

      &__right {

        &__title {
          margin-bottom: 20px;
        }

        .address-block {
          display: flex;

          .in-address {
            width: 40%;
            padding-right: 6px
          }

          .in-district,
          .in-city {
            width: 30%;
            padding: 20px 6px 0;
          }
        }

        .invoice-block {
          margin-top: 12px;
        }

        button {
          width: 100%;
          padding: 12px;
          font-size: 14px;
          transition: all ease .3s;

          &.btn-save {
            margin: 12px 0 0;
            border-radius: 5px;
            background-color: ${colors.green};
            color: ${colors.white};

            &:hover {
              opacity: .7;
            }
          } 

          &.btn-cancel {
            display: block;
            width: 100px;
            margin: 0 auto;
            color: #E4E7EC;

            &:hover {
              color: ${colors.red};
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .edit-form {
      width: 60vw;

      .form-body {
        display: flex;

        &__left {
          width: 30%;
        }

        &__right {
          width: 70%;
          padding: 0 20px 0 24px;
        }
      }
    }
  }

  @media (min-width: 992px) {
    display: flex;

    .default-message {
      margin-left: 24px;
      margin-top: 0;
    }
  }
`;

export default InfomationStyle;
