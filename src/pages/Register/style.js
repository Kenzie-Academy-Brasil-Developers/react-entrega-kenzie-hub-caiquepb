import styled from "styled-components";
import { ButtonDefault } from "../../styles/Button";

export const StyledRegisterMain = styled.main`
  width: 100%;
  /* height: 100%; */

  padding: 48px 12px;

  background: var(--color-gray-4);

  .main__container {
    display: flex;
    flex-direction: column;
    gap: 31.62px;

    margin: 0 auto;

    max-width: 369px;

    .nav__container {
      display: flex;
      justify-content: space-between;

      img {
        width: 97.59px;
        height: 16.9px;
      }
      a {
        ${ButtonDefault}

        height: 31.95px;
        width: 79.54px;

        text-decoration: none;

        background-color: var(--color-gray-3);
        border: 0.9772px solid var(--color-gray-3);
        border-radius: 4px;

        font-weight: 600;
        font-size: 9.59437px;
        line-height: 23px;

        color: var(--color-gray-0);
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 17.59px;

      max-width: 369px;

      padding: 34px 18px;

      background: var(--color-gray-3);
      box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
      border-radius: 3.19812px;

      h1 {
        align-self: center;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14.3916px;
        line-height: 22px;

        color: var(--color-gray-0);
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 9.59437px;
        line-height: 18px;

        color: var(--color-gray-1);
      }

      fieldset {
        display: flex;
        flex-direction: column;
        gap: 17.86px;

        border: 0;

        label {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 9.73988px;
          line-height: 0px;

          color: var(--color-gray-0);
        }

        input,
        select {
          padding: 0px 12.9865px;

          height: 38.38px;

          background: var(--color-gray-2);

          border: 0.973988px solid var(--color-gray-2);
          border-radius: 3.19812px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12.9865px;
          line-height: 21px;

          color: var(--color-gray-1);
        }
      }
      button {
        ${ButtonDefault}

        height: 38.5px;

        background-color: var(--color-primary-negative);
        border: 0.973988px solid var(--color-primary-negative);
        border-radius: 3.19812px;

        font-weight: 500;
        font-size: 12.7925px;
        line-height: 21px;
      }
    }
  }
  @media (min-width: 1024px) {
    .main__container {
      .nav__container {
        img {
          width: 122.06px;
          height: 21.21px;
        }
        a {
          font-size: 12px;
          line-height: 28px;
        }
      }
      form {
        gap: 22px;

        max-width: 369px;

        padding: 42px 22px;

        h1 {
          font-size: 18px;
          line-height: 28px;
        }

        p {
          font-size: 12px;
          line-height: 22px;
        }

        fieldset {
          gap: 22px;

          label {
            font-size: 12.182px;
            line-height: 0px;
          }

          input,
          select {
            padding: 0px 16.2426px;

            height: 48px;

            font-size: 16.2426px;
            line-height: 26px;
          }
        }
        button {
          height: 48px;

          font-size: 16px;
          line-height: 26px;
        }
      }
    }
  }
`;
