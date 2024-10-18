import Image from "next/image";
import dogsJson from "./dogs.json"; //dogsJson is an array of dog objects

export default function Page() {
    let dogs = [...dogsJson]; // shallow copy of dogsJson
    

    return (
      <main className="p-2">
        <h1 className="text-2xl font-semibold">Week 6 Demo</h1>
        <ul>
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