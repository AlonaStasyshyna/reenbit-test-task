import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #081F32;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}
button {
    cursor: pointer;
    padding: 0;
}
a {
    text-decoration: none;
    color: inherit;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;

  @media screen and (min-width: 360px) {
    min-width: 360px;
  }
`;
