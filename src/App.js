import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./Theme.css";
import "./Utilities.css";

// import AppRouter from "./routes/app.router";
// import AdminRouter from "./routes/admin.router";

const NotFound = lazy(() => import("./components/NotFound"));
const AppRouter = lazy(() => import("./routes/app.router"));
const AdminRouter = lazy(() => import("./routes/admin.router"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppRouter />
          </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
