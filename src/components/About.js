import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./ContactUs";
// import Home from "./Home";

// const Home = lazy(() => import("./Home"));
// const ContactUs = lazy(() => import("./ContactUs"));

export default function About(props) {
  console.log(props.match.params);
  const greeting = "Hello from About  Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link to="/home">Go Back</Link>
        </li>
      </ul>
    </div>
  );
}
