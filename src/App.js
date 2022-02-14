import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10)
  const userData = {count , data};

  useEffect(() => {
    console.log("Called with Data State");
  },[data]);

  return (
    <div className='App'>
      <User data={userData} />
      <button onClick={() => setCount(count + 1)} >Update Counter</button> <br />
      <button onClick={() => setData(data + 1)} >Update Data</button>
    </div>
  );
}

export default App;
