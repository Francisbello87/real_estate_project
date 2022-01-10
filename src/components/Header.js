import React from "react";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/hero_img.png"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "800px",
        marginTop: "-120px",
      }}
    >
      <div>
        <span className="hero-content">
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
        </span>
      </div>
    </div>
  );
}
export default Header;
