import React, { useState, useEffect } from 'react';

const User = (props) => {

    // console.log(props)
  return (
    <div className='App'>
      <h1>CountProps = {props.data.count}</h1>
      <h2>DataProps = {props.data.data}</h2>
    </div>
  );
}

export default User;
