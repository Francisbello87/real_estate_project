import React from "react";
import Logo from "../Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
      <ul className="menu-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#" className="primary-btn">
            Work with us<i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
