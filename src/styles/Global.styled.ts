import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
    
  @media (max-width: 1270px) {
    padding: 50px 0;
  }
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
