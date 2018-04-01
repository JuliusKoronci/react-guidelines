import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { IStoreState } from '../@types/state';
import DevTools from '../common/DevTools';
import { isProd } from '../common/Process';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();
// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState: IStoreState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middleWares = [reactRouterMiddleware, sagaMiddleware];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleWares)),
  );
}

function configureStoreDev(initialState: IStoreState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middleWares = [logger, reactRouterMiddleware, sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleWares), DevTools.instrument()),
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

const configureStore = isProd() ? configureStoreProd : configureStoreDev;

export default configureStore;
