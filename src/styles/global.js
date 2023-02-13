import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

img {
    max-width: 100%;
}

body {
    font-family: 'Inter', sans-serif;
}

button {
    cursor: pointer;
}
`;
