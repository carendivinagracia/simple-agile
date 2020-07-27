import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="contained" color="primary" href="https://reactjs.org" disableElevation>
            Learn React
          </Button>
        </header>
      </div>
    );
  }
}

export default App;