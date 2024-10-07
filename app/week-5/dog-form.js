"use client"

import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleNameChange = (event) => { // #1
        // setName(event.target.value); // #1

        // let name = event.target.value; //#2
        // name = name.replace(/[^A-Za-z]/g, ""); //#2
        // setName(name); // #2
        
        setName(event.target.value.replace(/[^A-Za-z]/g, "")); // #3
    };



    return (
      //Name Handler
      <div className="m-2">
        <h2 className="text-2xl">Add a dog</h2>
        <form className="m-2">
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event)}
            className="border border-gray-400 m-2"
          />
          {/* Breed: <input type="text" name="breed"></input> */}
          <label htmlFor="breed"> Breed: </label>
          <input
            id="breed"
            type="text"
            value={breed}
            onChange={(event) => setBreed(event.target.value)} //Different way of handling the event
            className="border border-gray-400 m-2"
          />
            <label htmlFor="age"> Age: </label>
            <input
                id="age"
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                className="border border-gray-400 m-2"
            />
        </form>   
        {/* OUTPUT HANDLERS     */}
        <div className="text-lg"> 
            <p>Name: {name}</p>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
        </div>
      </div>
    );
}