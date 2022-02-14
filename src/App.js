import React, { useState, useMemo, createRef, useRef } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const inputRef = useRef(null);

  const handleInputRef = () => {
    console.log("Function Called");
    // inputRef.current.value="1000";
    // inputRef.current.focus()
    // inputRef.current.style.display="none";
    inputRef.current.style.color="red";
  }

  return (
    <div className='App'>
      <h1>Ref in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInputRef} >Check Ref</button>
    </div>
  );

}

export default App;
