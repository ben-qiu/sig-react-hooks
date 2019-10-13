import React, { useState, useRef } from "react";

const Counter = props => {
  const { someObject: { article } = {}, reset } = props;

  const [counter, setCounter] = useState(0);

  const renders = useRef(0);

  const handleReset = () => {
    if (reset) reset();
    setCounter(0);
    renders.current = 0;
  };

  return (
    <div>
      <p>{article}</p>
      <div>{`Likes: ${counter}`}</div>
      <button onClick={() => setCounter(counter + 1)}>Like It</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <div>Counter Re-Renders: {renders.current++}</div>
    </div>
  );
};

export default Counter;
