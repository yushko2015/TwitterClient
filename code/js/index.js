import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import Main from './components/main';


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
  <Main />
  </Provider>, 
  document.getElementById('fieldToShow')
);
