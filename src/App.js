import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [Data, setData] = useState([]);
  const [Get, setGet] = useState(true);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [UserID, setUserID] = useState('');
  const [complete, setComplete] = useState(true);

  // useEffect(() => {
  //   const URL = 'https://jsonplaceholder.typicode.com/todos/';
  //   fetch(URL).then((result) => result.json())
  //     .then((json) => setData(json))
  // }, [Get]);

  // console.log(Data)

  const saveUser = () => {
    const userData = {
      completed: complete,
      id: id,
      title: title,
      userId: UserID
    }

    console.log(userData)

    const URL = 'https://jsonplaceholder.typicode.com/todos/';
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((result) => {
      console.log(result);
    })
  }

  return (
    <div className='App'>
      <h1>POST API Call</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='ID...' /> <br />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title...' /><br />
      <input type="text" value={UserID} onChange={(e) => setUserID(e.target.value)} placeholder='UserID...' /><br />
      <input type="text" value={complete} onChange={(e) => setComplete(e.target.value)} placeholder='Completed...' /><br /><br />
      <button type='button' onClick={saveUser}>Save</button>
    </div>
  );
  // 61f80b5b6bf080c2555a74fa
}

export default App;
