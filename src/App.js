import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10)

  useEffect(() => {
    console.log("Called with Data State");
  },[data]);

  useEffect(() => {
    console.log("Called with Count State")
  }, [count]);

  return (
    <div className='App'>
      <h1>Count = {count}</h1>
      <h2>Data = {data}</h2>
      <button onClick={() => setCount(count + 1)} >Update Counter</button> <br />
      <button onClick={() => setData(data + 1)} >Update Data</button>
    </div>
  );
}

export default App;
