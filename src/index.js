import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'; 
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger() 

const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
  <Provider store={store}>
  <App  />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
