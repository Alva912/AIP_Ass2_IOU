import React from "react";
import ReactDOM from "react-dom";

// NOTE UI design style sheet module & library
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

// NOTE Test server API
// import Counter from "./Components/TestAPI.js";

import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<Counter />, document.getElementById("testAPI"));
