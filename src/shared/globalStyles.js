import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
