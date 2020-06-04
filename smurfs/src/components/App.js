import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='header'>Welcome to the Smurfs Village!!</h1>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
