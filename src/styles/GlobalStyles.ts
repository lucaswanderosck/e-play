import { createGlobalStyle } from "styled-components";

const colors = {
  white: "#eee",
  black: "#111",
  gray: "#333",
  green: "#10ac84",
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.white};
    }
`;
