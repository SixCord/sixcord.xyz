import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./ContactUs";
// import Home from "./Home";

// const Home = lazy(() => import("./Home"));
// const ContactUs = lazy(() => import("./ContactUs"));

export default function AddUser(props) {
  console.log(props.match.params);
  const greeting = "Add User Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link to="/admin">Go Back</Link>
        </li>
      </ul>
    </div>
  );
}
