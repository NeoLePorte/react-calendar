import React, { Component } from 'react';
import CalendarForm from './components/CalendarForm'
import {Container} from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calendar App</h1>
        </header>
        <Container>
          <CalendarForm />
        </ Container>
      </div>
    );
  }
}

export default App;