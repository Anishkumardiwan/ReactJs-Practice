import React, { useState, useEffect } from 'react';

const User = (props) => {

    // console.log(props)
  return (
    <div>
      <span>{props.items.name}</span>
      <span>{props.items.email}</span>
      <span>{props.items.contact}</span>
    </div>
  );
}

export default User;
