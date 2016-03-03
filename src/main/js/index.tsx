import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

import {App} from './app/App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reduceAppState} from './app/AppState';

// Stylesheet is converted to index.css by ExtractTextPlugin defined in Webpack config.
require('../less/index.less');

let config:any = require('./config.json');

const DEFAULT_APP_STATE = {
  links: [
    {href: config.href}
  ]
};

let appStore = createStore(reduceAppState, DEFAULT_APP_STATE);

// Prevent application from being re-rendered too often with throttle.
let renderApp = _.throttle(() => {
  ReactDOM.render(
    <App dispatch={appStore.dispatch}
         state={appStore.getState()}/>,
    document.getElementById('app'));
}, 50);

// Initial render.
renderApp();

// Schedule application re-render on every action.
appStore.subscribe(() => setTimeout(renderApp, 0));
