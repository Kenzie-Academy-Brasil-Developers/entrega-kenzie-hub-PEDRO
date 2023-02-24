import styled from "styled-components";

export const StyledModalUpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  padding-top: 70px;
  gap: 20px;

  position: absolute;
  width: 95%;
  max-width: 450px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  fieldset {
    margin-bottom: 4px;
  }

  .divClose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 0;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    height: 49px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-left: 20px;

    color: #f8f9fa;
  }

  .closeButton {
    width: 8.79px;
    height: 20.79px;

    font-style: normal;
    font-weight: 600;
    font-size: 0.7995rem;
    line-height: 1.3125rem;

    border: none;
    background: none;
    color: #868e96;
    margin-right: 21.5px;
  }

  .divButtons {
    display: flex;
    width: 100%;
    gap: 25px;
    margin-bottom: 35px;

    .saveButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10.15px;

      width: 100%;
      height: 48px;

      background: #59323f;

      border: 1.2182px solid #59323f;
      border-radius: 4px;
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

    .excludeButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10.15px;

      width: 40%;
      height: 48px;

      background: #343b41;

      border: 1.2182px solid #343b41;
      border-radius: 4px;

      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;

      color: #ffffff;

      :hover {
        background: #868e96;
        border: 1.2182px solid #868e96;
      }
    }

    font-style: normal;
    font-weight: 500;
    font-size: 0.7995rem;
    line-height: 1.3125rem;

    color: #ffffff;
  }
`;
