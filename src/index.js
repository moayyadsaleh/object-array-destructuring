import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import cars from "./practics";

import reportWebVitals from "./reportWebVitals";

//Deconstruct the used items below(tesla and honda) then deconstruct the full cars array and display it.
console.log(cars);
const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
} = cars[0];

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
} = cars[1];

const App = () => (
  <React.StrictMode>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
        <th>Zero to Sixty</th>
      </tr>
      <tr>
        <td>{hondaModel}</td>
        <td>{hondaTopColour}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaZeroToSixty}</td>
      </tr>
      <tr>
        <td>{teslaModel}</td>
        <td>{teslaTopColour}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaZeroToSixty}</td>
      </tr>
    </table>
  </React.StrictMode>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

reportWebVitals(console.log);
