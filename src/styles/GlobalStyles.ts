import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightGray: '#a3a3a3',
  green: '#10ac84',
}

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
}

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      list-style: none;
    }
  
    body {
      background-color: ${colors.black};
      color: ${colors.white};
      padding-top: 40px;
    }
  
    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 80%;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 80%;
      }
    }
  `
