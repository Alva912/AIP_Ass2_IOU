import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  // Nav,
  // NavItem,
  // Button,
} from "reactstrap";

// NOTE Import custom components
import WelcomeBanner from "./Components/WelcomeBanner.js";
import UserMenu from "./Components/UserMenu.js";
import UserLogIn from "./Components/UserLogIn.js";
import UserSignUp from "./Components/UserSignUp.js";
import CreatePost from "./Components/CreatePost.js";
import DisplayPosts from "./Components/DisplayPosts.js";
import Leaderboard from "./Components/Leaderboard.js";

const App = (props) => {
  const [isVisitor, setIsVisitor] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSigningUp = () => {
    setIsVisitor(false);
    setIsSigningUp(true);
    setIsLoggingIn(false);
  };

  const onLoggingIn = () => {
    setIsVisitor(false);
    setIsSigningUp(false);
    setIsLoggingIn(true);
  };

  const onLoggedIn = () => {
    setIsSigningUp(false);
    setIsLoggingIn(false);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* NOTE Static navigation header */}

      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarBrand href="/" className="p-0">
          IOU Web App
        </NavbarBrand>
        {/* <Nav className="ml-auto p-0">
          <NavItem isDisplay={isVisitor | isLoggingIn}>
            <Button color="primary" size="sm" outline onClick={onSigningUp}>
              Sign Up
            </Button>
          </NavItem>
          <NavItem isDisplay={isVisitor | isSigningUp}>
            <Button color="secondary" size="sm" outline onClick={onLoggingIn}>
              Log In
            </Button>
          </NavItem>
        </Nav> */}
      </Navbar>

      {/* NOTE Dynamic content */}

      <WelcomeBanner
        isDisplay={isVisitor}
        onLoggingIn={onLoggingIn}
        onSigningUp={onSigningUp}
      ></WelcomeBanner>

      <Row className="justify-content-between">
        <Col id="left-col" xs="3">
          <UserMenu isDisplay={isLoggedIn}></UserMenu>
        </Col>

        <Col id="middle-col" xs="auto">
          {" "}
          <UserLogIn
            isDisplay={!isLoggedIn && isLoggingIn}
            onLoggedIn={onLoggedIn}
          ></UserLogIn>
          <UserSignUp
            isDisplay={!isLoggedIn && isSigningUp}
            onLoggedIn={onLoggedIn}
          ></UserSignUp>
          <CreatePost isDisplay={isLoggedIn}></CreatePost>
          {/* TODO Change according to user menu option selected */}
          <DisplayPosts isDisplay={isVisitor || isLoggedIn}></DisplayPosts>
        </Col>

        <Col id="right-col" xs="3">
          <Leaderboard isDisplay={isVisitor || isLoggedIn}></Leaderboard>
        </Col>
      </Row>
    </div>
  );
};

export default App;
