import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// import Home from './Home';

// const Home = lazy(() => import("./Home"));

export default function About() {
  const greeting = "Hello from Contact Us!";
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
