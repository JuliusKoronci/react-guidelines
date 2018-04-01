import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    margin: 0;
  }
`;
