import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <StarRating defaultRating={3} />
  //   <StarRating
  //     maxRating={5}
  //     size="24"
  //     color="red"
  //     messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
  //   />

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
