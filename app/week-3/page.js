import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 4,
    colour: "Golden",
  };
  let dog2 = {
    name: "Max",
    breed: "Poodle",
    age: 2,
    colour: "White",
  };
  let dog3 = {
    name: "Charlie",
    breed: "Labrador",
    age: 3,
    colour: "Black",
  };
  let dog4 = {
    name: "Bella",
    breed: "Pug",
    age: 1,
    colour: "Brown",
  };

  return (
    // <main className="pl-4">
    <main className="m-4">
      <h1 className="text-4xl font-bold">Meet the Dogs</h1>

      <Dog
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        colour={dog1.colour}
      />
      <Dog
        name={dog2.name}
        breed={dog2.breed}
        age={dog2.age}
        colour={dog2.colour}
      />
      <Dog
        name={dog3.name}
        breed={dog3.breed}
        age={dog3.age}
        colour={dog3.colour}
      />
      {/* <section className="my-2 ml-2">       
          <h2 className="text-lg text-blue-700">{dog1.name}</h2>
          <p>Breed: {dog1.breed}</p>
          <p>Age: {dog1.age}</p>
          <p>Colour: {dog1.colour}</p>
      </section> */}
    </main>
  );
}
