import React from 'react';
import ReactDOM from 'react-dom';

import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import './assets/scss/app.scss';

import Routes from './routes/'

const history = useRouterHistory(createHistory)({
  basename: '/quizzical'
})

ReactDOM.render((
  <Router history={history}>
    { Routes }
  </Router>
), document.getElementById('root'));
