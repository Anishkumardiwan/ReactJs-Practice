import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [Count, setCount] = useState(1);

  const setUpdateCounter = () => {
    let rand = Math.floor(Math.random() * 10);
    setCount((pre) => {
      console.log(pre);
      return rand;
    });
  }

  return (
    <div className='App'>
      <h1>{Count}</h1>
      <button onClick={setUpdateCounter}>Click</button>
    </div>
  );

}

export default App;
