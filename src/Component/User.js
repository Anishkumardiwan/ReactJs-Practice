import React, { useState , useEffect , useRef} from 'react';

const User = (props) => {

  const lastVal = useRef();

  useEffect(()=>{
    lastVal.current=props.count
  })
  // console.log(ref)
  // const data = props;
  const preProps = lastVal.current
  return (
    <div>
      <h1>Current Value: {props.count}</h1>
      <h1>Previous Value: {preProps}</h1>
    </div>
  );
}

export default User;
