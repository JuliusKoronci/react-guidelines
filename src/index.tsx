import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore, { sagaMiddleware } from './app/configureStore';
import Root from './app/Root';
import initialState from './data/initialState';
import mySaga from './data/sagas';
import { App } from './pages';
import registerServiceWorker from './registerServiceWorker';
import baseStyles from './theme/baseStyles';

const store = configureStore(initialState);

sagaMiddleware.run(mySaga);

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
