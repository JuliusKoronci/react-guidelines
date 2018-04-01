import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './app/Root';
import configureStore from './app/configureStore';
import initialState from './app/initialState';

const store = configureStore(initialState);

const Children = () => <p>Whatever</p>;

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
