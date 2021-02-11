import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

// import Home from "../components/Home";
// import About from "../components/About";
// import ContactUs from "../components/ContactUs";
// import HomeModule from "../modules/home.module";

// const Home = lazy(() => import("../components/Home"));
const Commands = lazy(() => import("../components/Commands"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const HomeModule = lazy(() => import("../modules/home.module"));

export const Home = Loadable({
  loader: () => import("../components/Home"),
  loading: Loading
});

export default function AppRouter() {
  return (
    <Suspense fallback={<div></div>}>
      <Route exact path="/" component={HomeModule} />
      <Route exact path="/home/about" component={Commands} />
      <Route path="/home/contactus" component={ContactUs} />
    </Suspense>
  );
}
