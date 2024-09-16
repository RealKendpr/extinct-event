import { useState } from "react";

export default function ReactButton() {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</button>
  );
}
