import styledNormalize from 'styled-normalize';
import { injectGlobal } from './theme';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 2500ms ease-in;
  }
`;
