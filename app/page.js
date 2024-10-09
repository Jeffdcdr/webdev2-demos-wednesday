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
        <a href="/week-5">Week 6 Demo</a>
      </li>
    </div>
  );
}
