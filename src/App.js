import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {
  const users = [
    { name: "Anish", email: "anish@gmail.com", contact: "123" },
    { name: "Rohit", email: "rohit@gmail.com", contact: "123" },
    { name: "Aman", email: "aman@gmail.com", contact: "123" },
    { name: "Shobhit", email: "shobhit@gmail.com", contact: "123" }
  ]

  return (
    <div className='App'>
      <h1>Reuse Component with List</h1>
      {
        users.map((item ,i)=>
          <User key={i} items={item} />
        )
      }
    </div>
  );

}

export default App;
