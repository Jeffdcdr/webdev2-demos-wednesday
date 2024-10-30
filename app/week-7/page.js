// import Counter from "./counter";
import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogData from "./dog-data.json";

import { useState } from "react"; //importing useState from react

export default function Page() {
  const [dogs, setDogs] = useState(dogData); 

  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 7 Demo </h1>
      <div></div>
      {/* <Counter /> */}
      <DogList />
      <DogForm  />
    </main>
  );
}
