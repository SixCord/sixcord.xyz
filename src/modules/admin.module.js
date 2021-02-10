import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

export default function AdminModule() {
  const greeting = "Welcome(Admin Module)";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link to="/admin/adduser">Add User</Link>
        </li>
        <li>
          <Link to="/admin/deleteuser">Delete User</Link>
        </li>
      </ul>
    </div>
  );
}
