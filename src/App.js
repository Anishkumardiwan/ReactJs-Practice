import React, { useState, useEffect } from 'react';
import './App.css';
import User from './Component/User';

const App = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/todos/';
    fetch(URL).then((result) => result.json())
      .then((json) => setData(json))
  }, []);

  // console.log(Data)

  return (
    <div className='App'>
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>UserId</td>
        </tr>
        {
          Data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
  // 61f80b5b6bf080c2555a74fa
}

export default App;
