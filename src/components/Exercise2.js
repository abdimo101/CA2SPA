import React, { useState } from "react";

function Exercise2() {
  const [count, setCount] = useState(0);
  return (
    <div className="exercise2">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>remove</button>
    </div>
  );
}

export default Exercise2;
