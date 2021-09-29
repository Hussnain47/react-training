import React from "react";

function Navbar() {
  return (
    <nav id="navbar" className="my-nav">
      <ul className="my-nav-list">
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
