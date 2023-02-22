import styled from "styled-components";
import { ButtonDefault } from "../../styles/Button";

export const FormModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  padding-top: 22vh;
  
  background-color: rgba(0, 0, 0, 0.5);

  .form__container {
    display: flex;
    flex-direction: column;


    margin: 0 auto;
    padding: 0 13px;

    max-width: 395px;

    .form__header {
      display: flex;
      justify-content: space-between;
      padding: 12px 20px;
      gap: 10px;

      background: var(--color-gray-2);
      border-radius: 4px 4px 0px 0px;

      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-gray-0);
      }

      p {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;

        color: var(--color-gray-1);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 17.65px;

      padding: 14.44px 17.65px 25.67px 17.65px;

      background: var(--color-gray-3);
      box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
      border-radius: 3.20867px;
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

      input,
      select {
        padding: 0px 13.0293px;

        max-width: 329.93px;
        height: 38.5px;

        background: var(--color-gray-2);

        border: 1.2182px solid var(--color-gray-0);
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;

        color: var(--color-gray-0);
      }
    }
    button {
      ${ButtonDefault}

      height: 38.5px;

      background-color: var(--color-primary);
      border: 0.9772px solid var(--color-primary);
      border-radius: 3.25733px;

      font-weight: 500;
      font-size: 12.7925px;
      line-height: 21px;
    }
  }
`;
