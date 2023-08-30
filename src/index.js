import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import animals from "./data";

import reportWebVitals from "./reportWebVitals";

//const animals = [
//{
//name: "cat",
//sound: "meow",
//feedingRequirments: {
// food: 2,
//water: 3,
//},
//},
//{ name: "dog", sound: "woof" },
//];
//Desrtuctioning the whole array
const [cat, dog] = animals;
//console.log(animals);

//Destructure properties of the cat object
const {
  name: catName,
  sound: catSound,
  feedingRequirments: catFeedingRequirments,
} = cat;

//console.log(catFeedingRequirments);

// Destructuring properties of the dog object
const { name: dogName, sound: dogSound, feedingRequirments = "Water" } = dog;

console.log(feedingRequirments);

const tesla = {
  model: "Tesla Model S",
  topSpeed: "200 mph",
  topColour: "Red",
};

const honda = {
  model: "Honda Civic",
  topSpeed: "140 mph",
  topColour: "Blue",
};

const App = () => (
  <React.StrictMode>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{tesla.topSpeed}</td>
        <td>{tesla.topColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{honda.topSpeed}</td>
        <td>{honda.topColour}</td>
      </tr>
    </table>
  </React.StrictMode>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

reportWebVitals(console.log);
