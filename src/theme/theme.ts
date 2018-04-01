import * as styledComponents from 'styled-components';
import colors from './colors';
import typography from './typography';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  colors: any;
  typography: any;
}

export const theme = {
  colors,
  typography,
};

export { css, injectGlobal, keyframes, ThemeProvider };

export default styled;
