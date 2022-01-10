import React from "react";

function Places(props) {
  return (
    <section className="places">
      <div className="places-options">
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
                <option value="saab">Option 1</option>
                <option value="opel">Option 2</option>
                <option value="audi">Option 3</option>
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
                <option value="saab">Option 1</option>
                <option value="opel">Option 2</option>
                <option value="audi">Option 3</option>
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
                <option value="saab">Option 1</option>
                <option value="opel">Option 2</option>
                <option value="audi">Option 3</option>
              </select>
            </li>
          </ul>
        </span>
      </div>
    </section>
  );
}
export default Places;
