import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    document.title = `(${count}) — Counter`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
