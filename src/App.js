import React from 'react';
import logo from './logo.svg';
import './App.css';

const initialStatuses = [];

const basicReducer = (state, action) => {
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

function App() {

  const [statuses, dispatch] = React.useReducer(
      basicReducer,
      initialStatuses
  );

  const handleChange = todo => {
    dispatch({ type: 'DO_TODO', id: todo.id });
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
