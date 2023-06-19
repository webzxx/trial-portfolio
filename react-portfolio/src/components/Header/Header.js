import React from "react";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <h4 className="logo">web.dev</h4>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
