import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Task-List">TaskList</Link>
        </li>
        <li>
          <Link to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;