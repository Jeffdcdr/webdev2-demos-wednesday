import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1> Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <p>page.js that is the root NOT in the folder</p>
      <li>
        <a href="/week-2">Week 2 Page - Old Format</a>
      </li>
      <li>
        <Link href="week-2">Week 2 Page - NEW Format </Link>
      </li>
      <li>
        <a href="/week-3">Week 3 Demo</a>
      </li>
      <li>
        <a href="/week-4a">Week 4a The activity</a>
      </li>
      <li>
        <a href="/week-4">Week 4 Demo</a>
      </li>
      <li>
        <a href="/week-5">Week 5 Demo</a>
      </li>
      <li>
        <a href="/week-6">Week 6 Demo</a>
      </li>
      <li>
        <a href="/week-7">Week 7 Demo</a>
      </li>
      <li>
        <a href="/week-8">Week 8 Demo</a>
      </li>
      <li>
        <a href="/week-9">Week 9 Demo</a>
      </li>
      <li>
        <a href="/week-10">Week 10 Demo</a>
      </li>
      <li>
        <a href="/week-11">Week 11 Demo</a>
      </li>
      <li>
        <a href="/week-12">Week 12 Demo</a>
      </li>
      <li>
        <a href="/week-13">Week 13 Demo</a>
      </li>
    </div>
  );
}
