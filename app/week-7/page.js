import Counter from "./counter";
import DogList from "./dog-list";

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="text-2xl font-semibold"> Week 7 Demo </h1>
      <div></div>
      <Counter />
      <DogList />
    </main>
  );
}
