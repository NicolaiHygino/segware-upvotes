import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #f1f2f2;
    font-family: 'Open Sans', sans-serif;
  }

  h1, p {
    margin: 0;
  }
`;
