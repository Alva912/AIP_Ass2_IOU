// import React from "react";
import ReactDOM from "react-dom";
import React, { useState, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Navbar, NavbarBrand } from "reactstrap";

// NOTE UI design style sheet module & library
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

// NOTE Test server API
// import Counter from "./Components/TestAPI.js";

// import App from "./App.js";

const Home = lazy(() => import("./Routes/Home.js"));
const SignUp = lazy(() => import("./Routes/SignUp.js"));
const LogIn = lazy(() => import("./Routes/LogIn.js"));
const Main = lazy(() => import("./Routes/Main.js"));

const App = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const onLoggedIn = (_user) => {
    setCurrentUser({ id: _user.id, name: _user.name, email: _user.email });
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/signup"
          component={SignUp}
          props={(_user) => onLoggedIn(_user)}
        />
        <Route
          path="/login"
          component={LogIn}
          props={(_user) => onLoggedIn(_user)}
        />
        <Route path="/user/:id" component={Main} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<Counter />, document.getElementById("testAPI"));
