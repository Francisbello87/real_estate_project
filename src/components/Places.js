import React from "react";

function Places(props) {
  return (
    <div className="places">
      <section>
        <span className="places-options">
          <hr />
          <h1>Find your next place to live</h1>
          <span>
            <ul>
              <li>
                Looking For <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Location <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Property Type <i class="fas fa-chevron-down"></i>
              </li>
              <li>
                Price <i class="fas fa-chevron-down"></i>
              </li>
            </ul>
          </span>
        </span>
      </section>
    </div>
  );
}
export default Places;
