import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// import '@node_modules/modern-normalize/modern-normalize.css';

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
	--black: #040404;
	--orange: #e6533c;
	--orange-1: #ef8964;
	--beige: #efa082;
	--white: #efede8;
    --font-family: "Roboto", sans-serif;
}

/* :root {
  --font-family: "Roboto", sans-serif;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
`;
