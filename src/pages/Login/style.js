import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #121214;
  padding: 10px;
`;

export const StyledFormLogin = styled.form`
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

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 43px;

    color: #f8f9fa;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    padding-bottom: 40px;
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;

    color: #f8f9fa;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #f8f9fa;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;

    color: #ffffff;
  }

  .divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.125rem;

      color: #868e96;
    }

    .goToRegister {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 100%;
      height: 48px;
      background: #868e96;

      border: 1.2182px solid #868e96;
      border-radius: 4px;

      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;

      color: #f8f9fa;
    }

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;

      color: #f8f9fa;
    }
  }
`;
