import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #121214;
    --text-white: #e1e1e6;
    --text-grey: #a8a8b3;
    --blue-hover: #0071bd;
    --blue: #005a96;
    --green: #04d361;
    --color-shape: #202024;
    --color-shape-hover: #29292e;
    --color-borders: #323238;
  }

  body {
    background-color: var(--background);
    color: var(--text-white);
  }
`;
