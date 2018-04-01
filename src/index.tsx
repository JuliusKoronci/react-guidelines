import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './app/configureStore';
import initialState from './app/initialState';
import Root from './app/Root';
import { App } from './pages';
import registerServiceWorker from './registerServiceWorker';
import baseStyles from './theme/baseStyles';

const store = configureStore(initialState);

baseStyles();

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root') as HTMLElement,
);

if (module.hot) {
  module.hot.accept('./app/Root', () => {
    ReactDOM.render(
      <Root store={store}>
        <App />
      </Root>,
      document.getElementById('root') as HTMLElement,
    );
  });
}

registerServiceWorker();
