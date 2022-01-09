import React from "react";

function Subhero() {
  return (
    <div className="subhero">
      <img
        src={process.env.PUBLIC_URL + "/images/user.png"}
        alt="Strategic meeting pic"
      />
      <span className="subhero-text">
        <hr />
        <h1>You’re in good hands</h1>
        <p>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <button className="secondary-btn">
          Learn More<i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </span>
    </div>
  );
}
export default Subhero;
