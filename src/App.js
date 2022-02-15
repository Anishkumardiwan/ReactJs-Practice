import React, { useState, useMemo, createRef, useRef } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [val, setVal] = useState("Enter Here.....");

  return (
    <div className='App'>
      <h1>Controlled Component</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
      <p>State Value is : {val}</p>
    </div>
  );

}

export default App;
