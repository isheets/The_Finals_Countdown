import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewClassForm from './NewClassForm';
import ClassItem from './ClassItem'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <h1 className="title">The Finals Countdown</h1>
      <NewClassForm />
      <ClassItem />
      </div>
    );
  }
}

export default App;
