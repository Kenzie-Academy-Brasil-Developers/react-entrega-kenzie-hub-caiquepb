import styled from "styled-components";
import { ButtonDefault } from "../../styles/Button";

export const StyledHomeMain = styled.main`
  width: 100%;
  height: 100vh;

  padding: 0 12px;

  background: var(--color-gray-4);

  .main__container {
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    max-width: 732px;
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 73px;

    border-bottom: 1px solid var(--color-gray-3);

    img {
      width: 105.53px;
      height: 14.63px;
    }

    a {
      ${ButtonDefault}

      text-decoration: none;

      padding: 0px 16.2426px;

      height: 32px;

      background-color: var(--color-gray-3);
      border: 0.9772px solid var(--color-gray-3);
      border-radius: 4px;

      font-weight: 600;
      font-size: 12px;
      line-height: 28px;

      color: var(--color-gray-0);
    }
  }
  .user__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    height: 131px;

    border-bottom: 1px solid var(--color-gray-3);

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: var(--color-gray-0);
    }

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;

      color: var(--color-gray-1);
    }
  }
  .techs__container {
    display: flex;
    flex-direction: column;
    gap: 21px;

    padding: 19px 0;

    .title__container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

        color: var(--color-gray-0);
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      padding: 22px 8.5px;

      max-height: 416px;
      overflow-y: auto;

      background: var(--color-gray-3);
      border-radius: 4px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 12.18px;

        height: 48.73px;

        background: var(--color-gray-4);
        border-radius: 4.06066px;

        .tech__title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 14.2123px;
          line-height: 24px;

          color: var(--color-gray-0);
        }

        .tech__container {
          display: flex;
          align-items: center;
          gap: 10px;

          .tech__status {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12.182px;
            line-height: 22px;

            color: var(--color-gray-1);
          }

          .tech__img {
            height: 21.99px;
            width: 21.99px;
            color: white;
          }
        }
      }
      li:hover {
        background: var(--color-gray-2);

        .tech__status {
          color: var(--color-gray-0);
        }
      }
    }
    .techNone__title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;

      color: var(--color-gray-0);
    }
  }
`;
