import styled from "styled-components";

export const StyledDivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 369px;
  margin-top: 40px;

  .backToLogin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    background: #212529;
    border: none;
    border-radius: 4px;

    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;

    text-align: center;

    color: #f8f9fa;
    width: 79.54px;
    height: 31.95px;
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;

    color: #f8f9fa;
  }
`;

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 369px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 0 20px;
  gap: 30px;
  margin-bottom: 40px;
  padding-bottom: 30px;

  .divInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 25px;
    margin-top: 40px;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;

      color: #f8f9fa;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;

      color: #868e96;
    }
  }

  fieldset {
    button {
      top: 37px;
      color: #ffffff;
    }
  }

  .registerButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4.06066px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;

    color: #ffffff;

    :hover {
      background: #ff577f;

      border: 1.2182px solid #ff577f;
    }
  }
`;
