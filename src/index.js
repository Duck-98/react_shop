import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let basicState = [
  { id: 0, name: '멋진 신발1', quan: 2 },
  { id: 1, name: '멋진 신발2', quan: 3 },
];

let adState = true;

function reducer2(state = adState, action) {
  if (action.type === 'exit') {
    let alertCopy = state;
    alertCopy = false;
    return alertCopy;
  } else {
    return state;
  }
}

function reducer(state = basicState, action) {
  if (action.type === 'add') {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === 'increase') {
    let copy = [...state];
    copy[0].quan++; // copy를 만들고 수정
    return copy;
  } else if (action.type === 'decrease') {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 })); // state 보관함

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
