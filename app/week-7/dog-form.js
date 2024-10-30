"use client"

import { useState } from "react"; //importing useState from react

export default function DogForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 1000000);
        const newDog = { id: newId, name: name, age: age };
        console.log(newDog)
    };
    
    return (
        <div>
            <h2 className="text-2xl">Add a Dog</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"> Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black"
                    />
            </div>

            <div>
                <label htmlFor="age"> Age: </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        // onChange={(event) => setAge(event.target.value)}
                        onChange={(event) => setAge(parseInt(event.target.value))} //parseInt converts string to number before setting the state (setAge
                        className="text-black"
                    />
            </div>
                <button
                    type="submit"
                    // className="bg-blue-600 hover:bg-blue-800 text-white w-20 rounded m-1 p-1"
                    > Add
                </button>
            </form>
        </div>
    );

}