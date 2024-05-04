import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { StyledBtn } from "../components/Button";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-color: "#ECECEC";
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

section {
    padding: 100px 0;
    /* background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font2}; */
}

section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};

}

section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
}

h3 {
}

p {
}
`;
