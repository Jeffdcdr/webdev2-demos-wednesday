"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [randomDogUrl, setRandomDogUrl] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  // const getRandomDog = () => {
  // const response = fetch("https://dog.ceo/api/breeds/image/random");

  const getRandomDog = async (breed) => {
    // const getRandomDog = async () => { # 1
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
    // const response = await fetch("https://dog.ceo/api/breeds/image/random"); # 1
    // const data = response.json(); // this is a promise and not the actual data
    const data = await response.json();
    const url = data.message;
    setRandomDogUrl(url);
  };

  const getDogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message); // Object.keys returns an array of the object's keys
    setDogBreeds(breeds);
  };

  const handleBreedChange = (event) => {
    // alert(event.target.value); // to test if the onChange is working -- this will show the selected breed
    setSelectedBreed(event.target.value);
  };

  useEffect(() => {
    getRandomDog();
    getDogBreeds();
  }, []); // empty array means run once

  useEffect(() => {
    if (selectedBreed === "") return;
    getRandomDog(selectedBreed);
  }, [selectedBreed]); // this will run when selectedBreed changes

  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 8 Demo </h1>
      <div>
        <select onChange={handleBreedChange}>
          {dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>
          <img src={randomDogUrl} alt="Random Dog" />
        </p>
      </div>
    </main>
  );
}
