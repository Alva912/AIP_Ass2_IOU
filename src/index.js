// import React from "react";
import ReactDOM from "react-dom";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, NavbarBrand,Nav,NavItem,NavLink } from "reactstrap";

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
        <Navbar color="dark" dark expand="sm" fixed="top">
          <NavbarBrand href="/" className="p-0">
            IOU Web App
          </NavbarBrand>
          {/* SECTION 测试React Router */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/signup">SignUp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">LogIn</NavLink>
            </NavItem>
          </Nav>
          {/* !SECTION 测试React Router */}
        </Navbar>

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

ReactDOM.render(<App />, document.getElementById("root"));
