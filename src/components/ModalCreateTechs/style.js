import styled from "styled-components";

export const StyledDashboardDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  gap: 20px;

  position: absolute;
  width: 95%;
  max-width: 450px;
  padding-top: 70px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.5rem;
      margin-left: 20px;

      color: #f8f9fa;
    }

    button {
      width: 8.79px;
      height: 20.79px;

      font-style: normal;
      font-weight: 600;
      font-size: 0.7995rem;
      line-height: 1.3125rem;

      border: none;
      background: none;
      color: #868e96;
      margin-top: 30px;
      margin-right: 5px;

      :hover {
        background: none;
        border: none;
      }
    }
  }

  fieldset {
    margin-bottom: 4px;
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
    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4.06066px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;

    color: #ffffff;
    margin-bottom: 35px;

    :hover {
      background: #ff577f;

      border: 1.2182px solid #ff577f;
    }
  }
`;
