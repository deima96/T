import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="container">
          <li>
            <Link to="/" className="links">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/add" className="links">
              Add Task
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
