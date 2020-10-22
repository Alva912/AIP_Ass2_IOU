import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const Home = lazy(() => import("./Routes/Home"));
const SignUp = lazy(() => import("./Routes/SignUp"));
const LogIn = lazy(() => import("./Routes/LogIn"));
const Main = lazy(() => import("./Routes/Main"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogIn(data) {
    console.log(data);
    this.setState({ currentUser: data });
  }
  onCreatePost(data) {
    console.log(data);
    // this.setState({ currentUser: data });
  }

  render() {
    let user = this.state.currentUser;
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
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp func={this.onLogIn}></SignUp>
            </Route>
            <Route path="/login">
              <LogIn func={this.onLogIn}></LogIn>
            </Route>
            <Route path="/user">
              <Main user={user}></Main>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
