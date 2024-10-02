"use client"

import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return(
        <div className="m-2">
            <h2 className="text-2xl">Add a dog</h2>
            <form className="m-24">
                <label htmlFor="name"></label>
                <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => handleNameChange = (event)}
                />
            </form>
        </div>

    );
}