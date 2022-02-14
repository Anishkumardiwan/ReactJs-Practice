import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  })

  return (
    <div className='App'>
      <h1>Data = {count}</h1>
      <button onClick={() => setCount(count+1)} >Update Counter</button>
    </div>
  );
}

export default App;
