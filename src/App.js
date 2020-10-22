import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const Home = lazy(() => import("./Routes/Home.js"));
const SignUp = lazy(() => import("./Routes/SignUp.js"));
const LogIn = lazy(() => import("./Routes/LogIn.js"));
const Main = lazy(() => import("./Routes/Main.js"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: "",
        name: "",
        email: "",
      },
    };
    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogIn(data) {
    console.log(data);
    this.setState({ currentUser: data });
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar
            color="dark"
            dark
            expand="sm"
            fixed="top"
            className="py-0 my-0"
          >
            <NavbarBrand href="/" className="p-0">
              IOU Web App
            </NavbarBrand>
            {/* SECTION 测试React Router */}
            <Nav className="ml-auto py-0 my-0" navbar>
              <NavItem>
                <Link to="/signup" className="btn btn-primary btn-sm m-1">
                  SignUp
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login" className="btn btn-primary btn-sm m-1">
                  LogIn
                </Link>
              </NavItem>
            </Nav>
            {/* !SECTION 测试React Router */}
          </Navbar>

          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route
              path="/signup"
              // component={SignUp}
              // props={(_user) => onLoggedIn(_user)}
            >
              <SignUp func={this.onLogIn}></SignUp>
            </Route>
            <Route
              path="/login"
              // component={LogIn}
              // props={(_user) => onLoggedIn(_user)}
            >
              <LogIn func={this.onLogIn}></LogIn>
            </Route>
            {/* <Route path="/user/:id" component={Main}/> */}
            <Route path="/user/:id">
              <Main user={this.state.currentUser}></Main>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
