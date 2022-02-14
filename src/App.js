import React, { useState, useMemo } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [Count, setCount] = useState(0);
  const [Item, setItem] = useState(10);

  const multiCountMemo = useMemo(() => {
    return Count * 5;
  }, [Count])

  // const multiCount = () => {
  //   return Count * 5;
  // }

  return (
    <div className='App'>
      <h1>Reuse Component with List</h1>
      <h2>{Count}</h2>
      <h2>{Item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(Count + 1)}>Update Count</button>
      <button onClick={() => setItem(Item * 10)}>Update Item</button>
    </div>
  );

}

export default App;
