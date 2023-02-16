import styled from "styled-components";
import { ButtonDefault } from "../../styles/Button";

export const StyledLoginMain = styled.main`
  width: 100%;
  height: 100vh;

  padding: 0 12px;

  background: var(--color-gray-4);

  .div__container {
    display: flex;
    flex-direction: column;
    gap: 19.39px;

    margin: 0 auto;

    padding-top: 81px;

    max-width: 369px;

    img {
      align-self: center;
      width: 101px;
      height: 14px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 17.65px;

      padding: 34px 18px;

      background: var(--color-gray-3);
      box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
      border-radius: 3.20867px;

      h1 {
        align-self: center;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;

        color: var(--color-gray-0);
      }

      fieldset {
        display: flex;
        flex-direction: column;
        gap: 17.92px;

        border: 0;

        label {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 9.772px;
          line-height: 0px;

          color: var(--color-gray-0);
        }

        input {
          padding: 0px 13.0293px;

          height: 38.5px;

          background: var(--color-gray-2);

          border: 0.9772px solid var(--color-gray-0);
          border-radius: 3.20867px;

          color: var(--color-gray-0);

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;

          color: var(--color-gray-0);

          font-size: 13.0293px;
          line-height: 21px;
        }
      }
      button {
        ${ButtonDefault}

        height: 38.5px;

        background-color: var(--color-primary);
        border: 0.9772px solid var(--color-primary);
        border-radius: 3.25733px;

        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
      }

      p {
        align-self: center;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;

        color: var(--color-gray-1);
      }

      a {
        ${ButtonDefault}

        height: 38.5px;

        text-decoration: none;

        background-color: var(--color-gray-1);
        border: 0.9772px solid var(--color-gray-1);
        border-radius: 4px;

        color: var(--color-gray-0);

        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
      }
    }
  }
  @media (min-width: 1024px) {
    .div__container {
      gap: 35.7px;

      padding-top: 77.33px;

      img {
        width: 144.06px;
        height: 19.97px;
      }

      form {
        gap: 22px;

        padding: 42px 22px;

        h1 {
          font-size: 18px;
          line-height: 28px;
        }

        fieldset {
          gap: 22px;

          label {
            font-size: 12.182px;
          }

          input {
            padding: 0px 16.2426px;

            height: 48px;

            background: var(--color-gray-2);

            border: 1.2182px;
            border-radius: 4px;

            color: var(--color-gray-0);

            font-size: 16.2426px;
            line-height: 26px;
          }
        }
        button,
        a {
          height: 48px;

          font-size: 16px;
          line-height: 26px;
        }

        p {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
`;
