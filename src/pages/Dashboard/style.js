import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
  background: #121214;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    padding-bottom: 30px;
    padding-top: 30px;

    button {
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
      font-size: 12px;
      line-height: 28px;

      text-align: center;

      color: #f8f9fa;
    }
  }
`;

export const StyledDashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  background: #121214;
  min-height: 100vh;

  .sectionBio {
    border-bottom: 1px solid #343b41;
    border-top: 1px solid #343b41;
    background: #121214;
    width: 100%;
    padding-bottom: 30px;
    padding-top: 30px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 10px;
      background: #121214;
    }

    h2 {
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

  .sectionInfos {
    margin-top: 30px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
      padding: 10px;
      background: #121214;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;

      color: #f8f9fa;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;

      color: #ffffff;
    }
  }
`;
