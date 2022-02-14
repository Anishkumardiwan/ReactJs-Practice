import React, { useState, useEffect } from 'react';

const User = (props) => {

    // console.log(props)
    const data = props.items;
  return (
    <div>
      <span>{props.items.name}</span>
      <span>{props.items.email}</span>
      <span>{props.items.contact}</span>
      <button onClick={()=>props.alert(data)} >Click Me</button>
    </div>
  );
}

export default User;
