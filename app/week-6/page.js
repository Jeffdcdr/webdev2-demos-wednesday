"use client";

import { useState } from "react";

import Image from "next/image";
import dogsJson from "./dogs.json"; //dogsJson is an array of dog objects

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(-1); // selectedDogId is a state variable
  let dogs = [...dogsJson]; // shallow copy of dogsJson #1

  // SORTING dogs by name Option #1
  dogs.sort((a, b) => a.name.localeCompare(b.name)); // sort by name > localeCompare is built-in JS method

  // SORTING dogs by name Option #2
  // dogs.sort((a, b) => {
  //   if (a.name < b.name) return -1;
  //   if (a.name < b.name) return 1;
  //   return 0;
  // });

  // FILTERING dogs
  dogs = dogs.filter((dog) => dog.name.length > 5); // filter dogs with name length > 5

  const handleClick = (id) => {
    if (selectedDogId === id) {
      setSelectedDogId(-1);
      return;
    }
    setSelectedDogId(id);
  };

  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold">Week 6 Demo</h1>
      <p>Current Id: {selectedDogId}</p>
      <ul>
        {/* {dogsJson.map((dog) => (   #1 */}
        {dogs.map((dog) => (
          <li
            key={dog.name}
            // className="py-2 bg-slate-400 m-2"
            className={`py-2 m-2 ${dog.id === selectedDogId ? "bg-slate-200" : "bg-slate-100"}`}
            onClick={() => handleClick(dog.id)
            // onClick={handleClick(dog.id)
            }
          >
            {/* Why do we use an arrow function?
            The arrow function () => handleClick(dog.id) is necessary here because it delays the execution of handleClick until the click actually happens.
            Without the arrow function, if we wrote onClick={handleClick(dog.id)}, it would run immediately when the component renders, instead of when the user clicks. */}
            
            <h2 className="text-lg font-semibold">{dog.name}</h2>
            <p className="text-sm">{dog.description}</p>
            <p>
              <Image
                src={dog.imageUrl}
                alt={dog.name}
                width={480}
                height={360}
              />
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
