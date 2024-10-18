import Image from "next/image";
import dogsJson from "./dogs.json"; //dogsJson is an array of dog objects

export default function Page() {
  let dogs = [...dogsJson]; // shallow copy of dogsJson #1

  // sorting dogs by name Option #1
  dogs.sort((a, b) => a.name.localeCompare(b.name)); // sort by name > localeCompare is built-in JS method

  // sorting dogs by name Option #2
  // dogs.sort((a, b) => {
  //   if (a.name < b.name) return -1;
  //   if (a.name < b.name) return 1;
  //   return 0;
  // });

  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold">Week 6 Demo</h1>
      <ul>
        {/* {dogsJson.map((dog) => (   #1 */}
        {dogs.map((dog) => (
          <li key={dog.name} className="py-2">
            <h2 className="text-lg font-semibold">{dog.name}</h2>
            <p className="text-sm">{dog.description}</p>
            <p>
              <Image
                src={dog.imageUrl}
                alt={dog.name}
                width={640}
                height={480}
              />
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
