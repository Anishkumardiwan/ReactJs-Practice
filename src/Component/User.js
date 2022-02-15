import React, { useState , forwardRef } from 'react';

const User = (props , ref) => {

  // console.log(ref)
  // const data = props;
  return (
    <>
    <input ref={ref} type="text" />
    </>
  );
}

export default forwardRef(User);
