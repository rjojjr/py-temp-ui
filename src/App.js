import React from 'react';
import logo from './logo.svg';
import './App.css';

import { networkErrorMsg, loadingMsg, doneLoadingMsg } from "./constants";

const initialState = {
  isLoading: false,
  statuses: [],
  msg: {}
};

const basicReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      let statuses = state.statuses.map(status => {
        if (status.id === action.id) {
          return { ...status, now: action.now, day: action.day , week: action.week};
        } else {
          return status;
        }
      });
      return {...state, statuses: statuses};
    case 'UPDATE_MSG':
      return { ...state, msg: { msg: action.msg, type: action.msgType}};
    case 'EMPTY_MSG':
      return { ...state, msg: {}};
    case 'DONE_LOADING':
      return { ...state, isLoading: false};
    case 'LOADING':
      return { ...state, isLoading: true};
    default:
      return state;
  }
};

function App() {

  const [msgs, dispatch] = React.useReducer(
      basicReducer,
      initialState
  );

  const handleStatusChange = status => {
    dispatch({ type: 'UPDATE_STATUS', id: status.id, now: status.now, day: status.day, week: status.week });
  };

  const handleMsgChange = msg => {
    if(Object.keys(msg).length === 0){
      dispatch({ type: 'EMPTY_MSG' });
    } else if (msg.toString().localeCompare(doneLoadingMsg.toString())) {
      dispatch({ type: 'DONE_LOADING' });
    } else if (msg.toString().localeCompare(loadingMsg.toString())) {
      dispatch({ type: 'LOADING' });
    } else {
      dispatch({ type: 'UPDATE_MSG', msg: msg.msg, msgType: msg.type });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
