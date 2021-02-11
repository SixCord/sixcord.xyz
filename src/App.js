import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./Theme.css";
import "./Utilities.css";


const NotFound = lazy(() => import("./components/NotFound"));
const AppRouter = lazy(() => import("./routes/app.router"));
const AdminRouter = lazy(() => import("./routes/admin.router"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <AppRouter />
          </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
