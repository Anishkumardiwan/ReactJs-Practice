import React, { useState, useMemo, createRef, useRef } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [val, setVal] = useState("Enter Here.....");

  return (
    <div className='App'>
      <h1>High Order Component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  );

}

const HOCRed = (props) => {
  return(
    <h2 style={{backgroundColor:'red',width:100}}> <props.cmp/> </h2>
  );
}

const HOCGreen = (props) => {
  return(
    <h2 style={{backgroundColor:'green',width:100}}> <props.cmp/> </h2>
  );
}

const Counter = () => {

  const [Count, setCount] = useState(0)

  return (
    <>
      <h3> {Count} </h3>
      <button onClick={() => setCount(Count + 1)}>Update</button>
    </>
  );
}

export default App;
