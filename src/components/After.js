import React from "react";

function After() {
  return (
    <section>
      <div className=" after after-content">
        <span className="after-text">
          <hr />
          <h1>You’re in good hands</h1>
          <p>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
          <button className="secondary-btn">
            Learn More<i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </span>
        <img
          src={process.env.PUBLIC_URL + "/images/user2.png"}
          alt="Strategic meeting pic"
        />
      </div>
      <div className="after-hands">
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
      </div>
    </section>
  );
}

export default After;
