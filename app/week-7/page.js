"use client"

// import Counter from "./counter";
import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogData from "./dog-data.json";

import { useState } from "react"; //importing useState from react

export default function Page() {
  const [dogs, setDogs] = useState(dogData); 

  const handleAddDog = (newDog) => {
    setDogs([...dogs, newDog]);
  };

  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 7 Demo </h1>
      <div></div>
      {/* <Counter /> */}
      {/* <DogList /> */}
      <DogList dogs={dogs} />
      
      {/* onAddDog is a custom prop that will be passed to DogForm */}
      <DogForm onAddDog={handleAddDog}/> 

    </main>
  );
}
