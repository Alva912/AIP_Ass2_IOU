// import React from "react";
import ReactDOM from "react-dom";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Navbar, NavbarBrand } from "reactstrap";

// NOTE UI design style sheet module & library
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from "./App.js";

const Home = lazy(() => import("./Routes/Home"));
const SignUp = lazy(() => import("./Routes/SignUp"));
const LogIn = lazy(() => import("./Routes/LogIn"));
const Main = lazy(() => import("./Routes/Main"));

const App = (props) => {
  // const [currentUser, setCurrentUser] = useState({});

  // const onLoggedIn = (_user) => {
  //   setCurrentUser({ id: _user.id, name: _user.name, email: _user.email });
  // };
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            component={SignUp}
            // props={(_user) => onLoggedIn(_user)}
          />
          <Route
            path="/login"
            component={LogIn}
            // props={(_user) => onLoggedIn(_user)}
          />
          <Route path="/user/:id" component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);