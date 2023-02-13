import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    containerWidth ? containerWidth : 1200}px;
  margin: 0 auto;

  ${({ containerPadding }) => {
    switch (containerPadding) {
      case "all":
        return css`
          padding: 40px 10px 50px 10px;
        `;
      case "top":
        return css`
          padding: 40px 10px 10px 10px;
        `;
      case "bottom":
        return css`
          padding: 10px 10px 50px 10px;
        `;

      default:
        return css`
          padding: 10px;
        `;
    }
  }}
`;
