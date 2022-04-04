import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, html {
    font-size: 62.5%;
  }
  #root, html, body {
    height: 100%;
  }
  #root, body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color:#efefefa0;
  }
  a {
    text-decoration: none;
  }
`;
export default GlobalStyles;
