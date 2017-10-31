import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import Main from './components/main';
import SearchPage from './components/search';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(allReducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
        <Route path="/" component={Main}/>
        <Route path="search(/:q)" component={SearchPage}/>
    </Router>
  </Provider>
  , 
  document.getElementById('fieldToShow')
);


