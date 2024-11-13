"use client";

import { useCounter } from "./usecounter";

function Page() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <main className="p-2">
      <h1 className="m-4 text-3xl font-bold"> Week 9 Custom Hooks </h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </main>
  );
}
export default Page;
