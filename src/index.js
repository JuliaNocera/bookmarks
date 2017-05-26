import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
