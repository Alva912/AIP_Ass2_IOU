// import React, { useState } from "react";
import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

// NOTE Import custom components
// import WelcomeBanner from "./Components/WelcomeBanner.js";
// import UserMenu from "./Components/UserMenu.js";
// import UserLogIn from "./Components/UserLogIn.js";
// import UserSignUp from "./Components/UserSignUp.js";
// import CreatePost from "./Components/CreatePost.js";
// import DisplayPosts from "./Components/DisplayPosts.js";
// import Leaderboard from "./Components/Leaderboard.js";

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
        <Route path="/user" component={Main} />
      </Switch>
    </Router>
  );
  // const [isVisitor, setIsVisitor] = useState(true);
  // const [isSigningUp, setIsSigningUp] = useState(false);
  // const [isLoggingIn, setIsLoggingIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});

  // const onSigningUp = () => {
  //   setIsVisitor(false);
  //   setIsSigningUp(true);
  //   setIsLoggingIn(false);
  // };

  // const onLoggingIn = () => {
  //   setIsVisitor(false);
  //   setIsSigningUp(false);
  //   setIsLoggingIn(true);
  // };

  // const onLoggedIn = (_user) => {
  //   setIsSigningUp(false);
  //   setIsLoggingIn(false);
  //   setIsLoggedIn(true);
  //   setCurrentUser({ id: _user.id, name: _user.name, email: _user.email });
  // };

  // return (
  //   <div>
  //     {/* NOTE Static navigation header */}

  //     <Navbar color="dark" dark expand="sm" fixed="top">
  //       <NavbarBrand href="/" className="p-0">
  //         IOU Web App
  //       </NavbarBrand>
  //     </Navbar>

  //     {/* NOTE Dynamic content */}

  //     <WelcomeBanner
  //       isDisplay={isVisitor}
  //       onLoggingIn={onLoggingIn}
  //       onSigningUp={onSigningUp}
  //     ></WelcomeBanner>

  //     <Row className="justify-content-between">
  //       <Col id="left-col" xs="3">
  //         <UserMenu
  //           isDisplay={isLoggedIn}
  //           userName={currentUser.name}
  //           userId={currentUser.id}
  //         ></UserMenu>
  //       </Col>

  //       <Col id="middle-col" xs="auto">
  //         {" "}
  //         <UserLogIn
  //           isDisplay={!isLoggedIn && isLoggingIn}
  //           onLoggedIn={(_user) => onLoggedIn(_user)}
  //         ></UserLogIn>
  //         <UserSignUp
  //           isDisplay={!isLoggedIn && isSigningUp}
  //           onLoggedIn={(_user) => onLoggedIn(_user)}
  //         ></UserSignUp>
  //         <CreatePost isDisplay={isLoggedIn}></CreatePost>
  //         {/* TODO Change according to user menu option selected */}
  //         <DisplayPosts isDisplay={isVisitor || isLoggedIn}></DisplayPosts>
  //       </Col>

  //       <Col id="right-col" xs="3">
  //         <Leaderboard isDisplay={isVisitor || isLoggedIn}></Leaderboard>
  //       </Col>
  //     </Row>
  //   </div>
  // );
};

export default App;
