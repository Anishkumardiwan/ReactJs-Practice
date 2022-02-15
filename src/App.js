import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [Count, setCount] = useState(1);

  const setUpdateCounter = () => {
    let rand = Math.floor(Math.random() * 10);
    return setCount(rand);
  }

  return (
    <div className='App'>
      <User count={Count} />
      <button onClick={setUpdateCounter}>Click</button>
    </div>
  );

}

export default App;
