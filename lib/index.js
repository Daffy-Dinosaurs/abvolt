import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, IntlProvider } from 'react-redux';
import { Route, Router, browserHistory, hashHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers/root.reducer';
import promiseMiddleware from 'redux-promise';
import App from './components/app';
import D3Graphs from './containers/d3Graphs';

const loggerMiddleware = createLogger();

const freshstore = createStore(rootReducer, {}, compose(applyMiddleware(promiseMiddleware, loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(React.createElement(
  Provider,
  { store: freshstore },
  React.createElement(
    Router,
    { history: hashHistory },
    React.createElement(Route, { path: '/', component: App }),
    React.createElement(Route, { path: '/d3Graphs', component: D3Graphs }),
    React.createElement(Route, { path: '/sandbox/jon', component: D3Graphs })
  )
), document.getElementById('.app'));