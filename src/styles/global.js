import { createGlobalStyle } from 'styled-components';
import './fonts.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif !important;
    background: #fefefe;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    -webkit-appearance: none !important;
    -moz-appearance: none;
    appearance: none;
    border: 0;

    &:disabled,
    [disabled] {
      border: 1px solid #f0f0f0;
      background-color: #f0f0f0;
    }
  }
`;
