import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { StoreState } from '../@types/state';
import DevTools from '../tools/DevTools';
import { isProd } from '../tools/Process';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

function configureStoreProd(initialState: StoreState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middleWares = [
    reactRouterMiddleware,
  ];
  
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWares),
  ));
}

function configureStoreDev(initialState: StoreState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middleWares = [
    logger,
    reactRouterMiddleware,
  ];
  
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWares),
    DevTools.instrument(),
  ));
  
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }
  
  return store;
}

const configureStore = isProd() ? configureStoreProd : configureStoreDev;

export default configureStore;