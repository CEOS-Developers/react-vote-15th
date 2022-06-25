import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    textarea:focus, input:focus{
      outline: none;
    }
  }

  body {
    background: #212122;
    margin: 0;
    padding: 0;
    color: "white";
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
