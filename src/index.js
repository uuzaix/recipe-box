import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import { App } from './App';
import { recipeBox } from './reducer';

let store = createStore(
  recipeBox,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_RECIPE',
//   id: 3,
//   name: "doo",
//   ingredients: ['aa', 'dd']
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'DELETE_RECIPE',
//   id: 2
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'UPDATE_RECIPE',
//   id: 1,
//   name: "aaaaa",
//   ingredients: ['aaaaa', 'dddddd']
// });

// console.log(store.getState());