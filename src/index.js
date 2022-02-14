import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let basicState = [
  { id: 0, name: '멋진 신발', quan: 3 },
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
    let found = state.findIndex((a) => {
      return a.id === action.payload.id;
    });
    console.log(action.payload.id);
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === 'increase') {
    let copy = [...state];
    copy[action.data].quan++; // copy를 만들고 수정
    return copy;
  } else if (action.type === 'decrease') {
    let copy = [...state];
    copy[action.data].quan--;
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
