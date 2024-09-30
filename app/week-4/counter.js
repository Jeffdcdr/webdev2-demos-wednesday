"use client";

import { useState } from "react";   //importing useState from react 

export default function Counter() {
    const [count, setCount] = useState(0);    
    const increment = () => setCount(count + 1);

    
    const reset = () => setCount(0);

    return (
        <div>
            <p>Current count: {count}</p>
            <button 
            onClick={increment} className="bg-blue-600 hover:bg-blue-800 text-white w-20 rounded m-1 p-1"
            >
            Increment
            </button>
            <button
            onClick={reset} className="bg-red-600 hover:bg-red-800 text-white w-20 rounded m-1 p-1"
            >
            Reset    
            </button>
        </div>
        
          

    );
}