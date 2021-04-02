import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html, body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 16px;
      background-color: ${({ theme }) => theme.colors.bgColor};
      transition: ${props => props.mounted ? 'background-color .2s linear;' : ''};
  }

  a {
      color: inherit;
      text-decoration: none;
    }
  
`;