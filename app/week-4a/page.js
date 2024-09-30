

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [count, setCount] = useState(0);

  // TODO: Create a new state variable called 'isEnabled' with an initial value of false.
  const [isEnabled, setIsEnabled] = useState(false);
  // This variable will be used to control the enabled/disabled state of the increment button.

  

  const increment = () => {
    setCount(count + 1);
  };

  const toggleEnabled = () => {
    // TODO: Implement a function that toggles the value of 'isEnabled'.
    setIsEnabled(!isEnabled);
    // If 'isEnabled' is currently true, it should be set to false, and vice versa.
  };

  const reset = () => {
    setCount(0);
    
  };

  return (
    <div>
      <button
        onClick={increment}
        disabled={!isEnabled}
        className="bg-blue-400 disabled:bg-yellow-900 rounded m-4 p-4"
      >
        +1
      </button>
      <input type="checkbox" onChange={toggleEnabled} />
      Enable button
      <p>Current count: {count}</p>
      <button 
      onClick={reset}
      className= "bg-red-400 rounded m-2 p-2"
      >
      Reset
      </button>
      <p>
      Go back to <Link href="/" className="underline">Home page</Link>
      </p>
    </div>
    
  );
}
