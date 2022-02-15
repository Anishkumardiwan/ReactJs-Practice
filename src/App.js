import React, { useState, useMemo, createRef, useRef } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const inputRef = useRef(null);

  const handleInputRef = () => {
    console.log("Function Called");
    inputRef.current.style.color="white";
    inputRef.current.style.backgroundColor="red";

  }

  return (
    <div className='App'>
      <h1>Ref in React</h1>
      <User ref={inputRef} />
      <button onClick={handleInputRef} >Update Box</button>
    </div>
  );

}

export default App;
