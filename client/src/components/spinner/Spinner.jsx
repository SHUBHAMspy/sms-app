import React from 'react';
import Spinner from "./assets/images/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img src={Spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
    </>
  )
}

export default Spinner