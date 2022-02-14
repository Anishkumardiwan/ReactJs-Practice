import { React, Component, useState } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Anish",
      count: 0
    }
    console.log("Constructor");
  }

  shouldComponentUpdate() {
    console.log("Should Component Update", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
  }

  render() {
    console.log("Render");

    return (
      <div className='App'>
        <h1>Hello {this.state.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })} >Update Name</button>
      </div>
    );
  }
}

export default App;
