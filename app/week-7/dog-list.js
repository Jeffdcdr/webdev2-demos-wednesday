// import dogData from "./dog-data.json";
import Dog from "./dog.js";

// export default function DogList() {
export default function DogList({ dogs, onDelete }) {
  return (
    <div>
      <h2>Dog List</h2>

      {/* {dogData.map((dog) => ( */}
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
