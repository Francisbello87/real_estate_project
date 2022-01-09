import React from "react";

function Apartments(props) {
  return (
    <section className="apartments">
      <div className="property">
        <div className="details">
          <figure class="snip1193">
            <img src={process.env.PUBLIC_URL + props.image} alt="bedroom pic" />
            <figcaption>
              <a href="#" class="bottom-left">
                <i class="fas fa-heart"></i>
              </a>
              <a href="#" class="bottom-right">
                <i class="fas fa-phone-alt"></i>
              </a>
            </figcaption>
          </figure>

          <h1>{props.title}</h1>
          <ul>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/hotel-single-bed-1.png"}
                alt="bed pic"
                className="bed"
              />
              {props.bedroom}
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/bathroom-tub-towel.png"}
                alt="bed pic"
                className="bed"
              />
              {props.shower}
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/grid-artboard.png"}
                alt="bed pic"
                className="bed"
              />
              {props.number}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Apartments;
