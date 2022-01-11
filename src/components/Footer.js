import React from "react";
import Logo from "../Logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h1>
          Make your dreams a <span className="color">reality</span>
        </h1>
        <button className="secondary-btn">
          Work with us<i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="col-1">
          <img src={Logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h4>Column Heading</h4>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className="col-2">
          <h4>Column Heading</h4>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className="col-2">
          <h4>Column Heading</h4>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <span className="copyright">
        <p>
          &#xa9; 2022 Developed by <span className="color">Francis Bello</span>
        </p>
      </span>
    </footer>
  );
}

export default Footer;
