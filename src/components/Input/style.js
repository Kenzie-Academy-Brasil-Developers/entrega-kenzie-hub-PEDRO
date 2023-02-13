import styled from "styled-components";

export const StyledInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  border: none;

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

  span {
    color: #e83f5b;
  }
`;
