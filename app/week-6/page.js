import Image from "next/image";
import dogsJson from "./dogs.json"; 

export default function Page() {
    
    // let dogs = [
    //     { name: "Shnukems", description: "Adorable", imageUrl: "/images/dog1.jpg" },
    //     { name: "Barky", description: "Loud", imageUrl: "/images/dog2.jpg" },
    //     { name: "Puddles", description: "Wet", imageUrl: "/images/dog3.jpg" },
        
    // ];


    return (
      <main className="p-2">
        <h1 className="text-2xl font-semibold">
          Week 6 interactivity with forms
        </h1>
        <ul>
          {dogsJson.map((dog) => (
            <li key={dog.name}>
              <h2 className="text-lg font-semibold">{dog.name}</h2>
              <p className="text-sm">{dog.description}</p>
              <Image 
                src={dog.imageUrl} 
                alt={dog.name}
                width={640}
                height={480} />
            </li>
          ))}
        </ul>
      </main>
    );
}