import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #121214;
    --white: #e1e1e6;
    --grey: #a8a8b3;
    --blue-light: #0071bd;
    --blue: #005a96;
    --green: #04d361;
    --shape: #202024;
    --shape-hover: #29292e;
    --shape-middle: #202024;
    --borders: #323238;
    --error: #f44336;
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

  h3 {
    text-align: center;
  }

  body {
    background-color: var(--black);
    color: var(--white);
    font-family: 'Source Code Pro', monospace;
    font-size: 1rem;
  }
`;
