import React from "react";
import Logo from "../Logo.png";

function Header() {
  return (
    <div className="header">
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/hero_img.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "800px",
        }}
      >
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
        <div className="hero_text">
          <h1>Beautiful homes made for you</h1>
          <p>
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid.
          </p>
        </div>
        <div className="listings">
          <a href="#">
            See all listings<i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
