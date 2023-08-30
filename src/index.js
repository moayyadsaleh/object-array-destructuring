import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import cars from "./practics";

import reportWebVitals from "./reportWebVitals";

//Deconstruct the used items below(tesla and honda) then deconstruct the full cars array and display it.
console.log(cars);

const tesla = {
  model: "Tesla Model S",
  topSpeed: "200 mph",
  topColour: "Red",
};

const {
  model = "Tesla Model S",
  topSpeed = "200 mph",
  topColour = "Red",
} = tesla;

const honda = {
  model: "Honda Civic",
  topSpeed: "140 mph",
  topColour: "Blue",
};

const {
  hondaModel = "Honda Civic",
  hondaTopSpeed = "140 mph",
  hondatopColour = "Blue",
} = honda;

const App = () => (
  <React.StrictMode>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{model}</td>
        <td>{topSpeed}</td>
        <td>{topColour}</td>
      </tr>
      <tr>
        <td>{hondaModel}</td>
        <td>{hondaModel}</td>
        <td>{hondaModel}</td>
      </tr>
    </table>
  </React.StrictMode>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

reportWebVitals(console.log);
