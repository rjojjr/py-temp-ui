import React from 'react';
import logo from './logo.svg';
import './App.css';

const initialStatuses = [];
const initialMsg = [];

const statusReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.map(status => {
        if (status.id === action.id) {
          return { ...status, now: action.now, day: action.day , week: action.week};
        } else {
          return status;
        }
      });
    default:
      return state;
  }
};

const msgReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.map(msg => {
        return { ...msg, msg: action.msg, type: action.msgType};
      });
    case 'EMPTY':
      return state.map(msg => {
        return [];
      });
    default:
      return state;
  }
};

function App() {

  const [statuses, dispatchStatus] = React.useReducer(
      statusReducer,
      initialMsg
  );

  const [msgs, dispatchMsg] = React.useReducer(
      msgReducer,
      initialStatuses
  );

  const handleStatusChange = status => {
    dispatchStatus({ type: 'UPDATE', id: status.id, now: status.now, day: status.day, week: status.week });
  };

  const handleMsgChange = msg => {
    if(Object.keys(msg).length === 0){
      dispatchMsg({ type: 'EMPTY' });
    } else {
      dispatchMsg({ type: 'UPDATE', msg: msg.msg, msgType: msg.type });
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
