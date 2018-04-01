import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { isProd } from '../../tools/Process';
import DevTools from '../../tools/DevTools';

export interface RootProps {
  store: Store<{}>;
}

type State = {};

export default class Root extends React.Component<RootProps, State> {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {this.props.children}
          {!isProd() && <DevTools />}
        </div>
      </Provider>
    );
  }
}