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
                <label for="cars">Looking For:</label>
                <select name="cars" id="cars">
                  <option
                    disabled="disabled"
                    selected="selected"
                    value="please select"
                  >
                    Please select
                  </option>
                  <option value="bungalow">Bungalow</option>
                  <option value="semi-detached">Duplex, semi-detached</option>
                  <option value="terraced house">Terraced house</option>
                </select>
              </li>
              <li>
                <label for="cars">Location:</label>
                <select name="cars" id="cars">
                  <option
                    disabled="disabled"
                    selected="selected"
                    value="please select"
                  >
                    Please select
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </li>
              <li>
                <label for="cars">Property Type:</label>
                <select name="cars" id="cars">
                  <option
                    disabled="disabled"
                    selected="selected"
                    value="please select"
                  >
                    Please select
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </li>
              <li>
                <label for="cars">Price:</label>
                <select name="cars" id="cars">
                  <option
                    disabled="disabled"
                    selected="selected"
                    value="please select"
                  >
                    Please select
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </li>
            </ul>
          </span>
        </span>
      </section>
    </div>
  );
}
export default Places;
