import React from "react";

const Loader = ({show}) => {
  return (
    <>
        {show ? <h2>New loading...</h2> : ''}
    </>
  );
};

export default Loader;
