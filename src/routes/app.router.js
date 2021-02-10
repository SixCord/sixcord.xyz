import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

// import Home from "../components/Home";
// import About from "../components/About";
// import ContactUs from "../components/ContactUs";
// import HomeModule from "../modules/home.module";

// const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const HomeModule = lazy(() => import("../modules/home.module"));

export const Home = Loadable({
  loader: () => import("../components/Home"),
  loading: Loading
});

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/home" component={HomeModule} />
      <Route exact path="/home/page" component={Home} />
      <Route exact path="/home/about" component={About} />
      <Route exact path="/home/about/:id" component={About} />
      <Route path="/home/contactus" component={ContactUs} />
    </Suspense>
  );
}
