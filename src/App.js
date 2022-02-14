import { React, Component, useState } from 'react';
import './App.css';
import User from './Component/User';

class App extends Component {

  constructor() {
    super();
    this.state = {
      show: true
    }
    console.log("Constructor");
  }

  // shouldComponentUpdate() {
  //   console.log("Should Component Update");
  // }

  render() {
    console.log("Render");

    return (
      <div className='App'>
        {
          this.state.show ? <User /> : <h2>Child Component Remove</h2>
        }
        <button onClick={()=> this.setState({show: !this.state.show})} >Toggle Child Component</button>
      </div>
    );
  }
}

export default App;
