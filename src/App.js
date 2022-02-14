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

  componentDidUpdate(preProps, preState, snapShot) {
    console.log("Component Did Update", preState.count, this.state.count);
    console.log(snapShot);
    // this.setState({count: this.state.count+1});
    if (preState.count === this.state.count) {
      console.log("Data is Same");
    }
  }

  render() {

    // this.setState({name:"Rohit"});
    // console.log("Render");

    return (
      <div className='App'>
        <h1>Hello {this.state.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: 1 })} >Update Name</button>
      </div>
    );
  }
}

export default App;
