import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
// import AddUser from "../components/AddUser";
// import DeleteUser from "../components/DeleteUser";

const AddUser = lazy(() => import("../components/AddUser"));
const DeleteUser = lazy(() => import("../components/DeleteUser"));
const AdminModule = lazy(() => import("../modules/admin.module"));

function AdminRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/admin" component={AdminModule} />
      <Route path="/admin/adduser" component={AddUser} />
      <Route path="/admin/deleteuser" component={DeleteUser} />
    </Suspense>
  );
}

export default AdminRouter;
