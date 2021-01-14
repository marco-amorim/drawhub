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
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  body {
    background-color: var(--background);
    color: var(--text-white);
    font-family: 'Source Code Pro', monospace;
    font-size: 1rem;
  }
`;
