// export default function Dog() {  #1
export default function Dog({ name, breed, age, colour }) {
  // export default function Dog(props) {  #2
  // let {name, breed, age, colour} = props; #2
  return (
    <section className="my-2 ml-2">
      <h2 className="text-lg text-lime-400">{name}</h2>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Colour: {colour}</p>
    </section>

    // # 2
    //     <section className="my-2 ml-2">
    //     <h2 className="text-lg text-lime-400">{props.name}</h2>
    //     <p>Breed: {props.breed}</p>
    //     <p>Age: {props.age}</p>
    //     <p>Colour: {props.colour}</p>
    //   </section>

    // # 1
    //  <section className="my-2 ml-2">
    //     <h2 className="text-lg text-blue-700">{dog1.name}</h2>
    //     <p>Breed: {dog1.breed}</p>
    //     <p>Age: {dog1.age}</p>
    //     <p>Colour: {dog1.colour}</p>
    //   </section>
  );
}
