import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { requestCountries } from './actions/request_country';
import rootReducer from './reducers/index';
import promiseMiddleware from 'redux-promise';
import { Route, Router, browserHistory, hashHistory } from 'react-router';
import App from './components/app';
import D3Graphs from './containers/d3Graphs';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, {}, compose(applyMiddleware(
  promiseMiddleware,
  loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/d3Graphs" component={D3Graphs}/>
    <Route path="/sandbox/jon" component={D3Graphs}/>
    </Router>
  </Provider>,
  document.querySelector('.app')
);
