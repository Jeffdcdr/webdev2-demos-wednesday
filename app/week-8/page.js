"use client"

import { useState, useEffect } from "react";


export default function Page() {
  const [randomDogUrl, setRandomDogUrl] = useState(null);

  // const getRandomDog = () => {
  //   const response = fetch("https://dog.ceo/api/breeds/image/random");
  // const data = response.json(); // this is a promise and not the actual data
  
  const getRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    // return data.message; // return the url of the dog image
    const url = data.message;
    setRandomDogUrl(url);
  };

  useEffect(() => {
    getRandomDog();
    // const newDogUrl = getRandomDog();
    // setRandomDogUrl(newDogUrl);
},[]); // empty array means run once


  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 8 Demo </h1>
      <div>
        <p>
          <img src={randomDogUrl} alt="Random Dog" />
        </p>
      </div>
    </main>
  );
}
