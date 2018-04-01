import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { theme, ThemeProvider } from '../../theme/theme';
import DevTools from '../../tools/DevTools';

import { isProd } from '../../tools/Process';

export interface IRootProps {
  store: Store<{}>;
}

export default class Root extends React.Component<IRootProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ThemeProvider theme={theme}>
          <div>
            {this.props.children}
            {!isProd() && <DevTools />}
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}
