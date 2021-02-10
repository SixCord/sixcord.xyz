import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// import About from './About';

// const About = lazy(() => import("./About"));

export default function Home() {
  const greeting = "Hello from Home  Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul className="">
        <li>
          <Link to="/home">Go Back</Link>
        </li>
      </ul>
    </div>
  );
}
