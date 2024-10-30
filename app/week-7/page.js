import Counter from "./counter";
import DogList from "./dog-list";
import DogForm from "./dog-form";

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 7 Demo </h1>
      <div></div>
      <Counter />
      <DogList />
      <DogForm  />
    </main>
  );
}
