import React, { useState, useMemo, createRef } from 'react';
import './App.css';
import User from './Component/User';

class App extends React.Component {

  constructor(){
    super();
    this.inputRef = createRef();
  }

  // componentDidMount(){
  //   console.log(this.inputRef);
  //   console.log(this.inputRef.current.value="100000");
  // }

  getVal(){
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color="white";
    this.inputRef.current.style.backgroundColor="red";
  }

  render() {
    return (
      <div className='App'>
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );

  }
}

export default App;
