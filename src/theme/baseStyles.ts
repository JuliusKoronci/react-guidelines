import styledNormalize from 'styled-normalize';
import { injectGlobal } from './theme';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;
