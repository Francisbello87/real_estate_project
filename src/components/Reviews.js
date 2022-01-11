import React from "react";
function Reviews(props) {
  return (
    <sections className="reviews">
      <div className="card">
        <div class="layer"></div>
        <div className="content">
          <div>
            <hr />
            <p>{props.review}</p>
          </div>
          <div className="reviews-content">
            <img
              src={process.env.PUBLIC_URL + props.image}
              alt="bed pic"
              className="bed"
            />
            <span>
              <h4>{props.name}</h4>
              <small>{props.relationship}</small>
            </span>
          </div>
        </div>
      </div>
    </sections>
  );
}
export default Reviews;
