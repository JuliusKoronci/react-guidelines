import * as React from 'react';
import * as ReactDOM from 'react-dom';
import baseStyles from './app/baseStyles';
import configureStore from './app/configureStore';
import initialState from './app/initialState';
import Root from './app/Root';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(initialState);

const Children = () => <p>Whatever</p>;

baseStyles();

ReactDOM.render(
  <Root store={store}>
    <Children />
  </Root>,
  document.getElementById('root') as HTMLElement,
);

if (module.hot) {
  module.hot.accept('./app/Root', () => {
    ReactDOM.render(
      <Root store={store}>
        <Children />
      </Root>,
      document.getElementById('root') as HTMLElement,
    );
  });
}

registerServiceWorker();
