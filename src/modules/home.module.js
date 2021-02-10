import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Home } from "../routes/app.router";
import Loadable from "react-loadable";

export default function HomeModule() {
  const greeting = "Welcome(Dashboard Module)";

  // Home.preload();

  return (
    <div>
      <h1>{greeting}</h1>
      <ul className="">
        <li>
          <Link to="/home/page">Home</Link>
        </li>
        <li>
          <Link to="/home/about">About</Link>
        </li>
        <li>
          <Link to="/home/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
