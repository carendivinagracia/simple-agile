import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/home/Home';
import Boards from './components/boards/Boards';
import Board from './components/board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/boards" component={Boards} />
            <Route exact path="/boards/:boardId" component={Board} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
