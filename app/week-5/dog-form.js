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

        setName(event.target.value.replace(/[^A-Za-z\s]/g, "")); // #3
        //replace all characters that are not A-Z or a-z with an empty string
        // /g is globally /s means is okay to have spaces, remove that and you cant
    };

    const handleBreedChange = (event) => {
      let breed = event.target.value;
      breed = breed.replace(/[^A-Za-z\s]/g, "");
      setBreed(breed);

    const handleAgeChange = (event) => {
        let age = event.target.value;
        age = parseInt(age);
        // if (isNaN(age)) {
        //     age = 0;
        // }
        if (age < 0) {
            age = 0;
        }
        setAge(age);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //comment this out and the form gets reloaded with no values
        let dog = { name, breed, age };
        console.log(dog);

        //reset the form
        setName("");
        setBreed("");
        setAge(0);
        
    }



    return (
      //Name Handler
      <div className="m-2">
        <h2 className="text-2xl">Add a dog</h2>
        <form 
        className="m-2"
        onSubmit={(event) => handleSubmit(event)}
        onEnter={(event) => handleSubmit(event)}
        >
        
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
            // onChange={(event) => handleBreedChange(event)} // This uses the function above
            onChange={(event) => setBreed(event.target.value) } //Different way of handling the event
            className="border border-gray-400 m-2"
          />
            <label htmlFor="age"> Age: </label>
            <input
                id="age"
                type="number"
                value={age}
                onChange={(event) => handleAgeChange(event)}
                className="border border-gray-400 m-2"
            />
            <input 
            type="submit" 
            value="Add dog"
            className="bg-blue-600 hover:bg-blue-800 text-white w-20 rounded m-1 p-1"
            
            />
            
        </form>   
        {/* OUTPUT HANDLERS     */}
        <div className="text-lg"> 
            <p>Name: {name.length >= 3 ? name : "Name too short"}</p>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
        </div>
      </div>
    );
}