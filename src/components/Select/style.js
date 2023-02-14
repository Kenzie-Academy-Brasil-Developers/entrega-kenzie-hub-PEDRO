import styled from "styled-components";

export const StyledSelect = styled.fieldset`
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

  select {
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #868e96;
  }

  p {
    color: #e83f5b;
  }
`;
