import Heading from "./heading";
import Link from "next/link";

export default function Page (){
    let a = 5;
    let b = 10;

    return (
        <main>
            <Heading/>            
            <Heading/>            
            <Heading/>
            <Heading></Heading>            
            <h1> Week 2 Demos</h1>
            <p>These are demos for week  2</p>
            <p>Page that are in the Week-2 folder under App</p>
            <p>The sum of a + b is {a+b}.</p>
            <p> 
                {/* This is to go back to the home page link */}
                Go back to <Link href="/"> Home page</Link> 
            </p>
            <p>
                Go back to <Link href="/" className="underline">Home page</Link>
            </p>
            
        </main>
    );
}