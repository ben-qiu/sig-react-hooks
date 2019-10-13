import React, { useState } from "react";
import Counter from "./Counter";

export default function PerformanceDemo() {
  const [value, setValue] = useState("");

  const handleReset = () => setValue("");

  const someObject = { article: "React Hooks are not complicated" };

  return (
    <div>
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      {value && <h2>{`Hello, ${value}`}</h2>}
      <Counter someObject={someObject} reset={handleReset} />
    </div>
  );
}
