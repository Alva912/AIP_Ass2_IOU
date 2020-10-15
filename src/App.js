import React, { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

// NOTE Import custom components
import WelcomeBanner from "./Components/WelcomeBanner.js";
import UserMenu from "./Components/UserMenu.js";
import UserSignIn from "./Components/UserSignIn.js";
import CreatePost from "./Components/CreatePost.js";
import DisplayPosts from "./Components/DisplayPosts.js";
import Leaderboard from "./Components/Leaderboard.js";

const App = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //     // NOTE Switch between homepage and sign-in page by changing user status
  //       userStatus: {
  //         isVisitor: true,
  //         isSigningIn: false,
  //         isSignedIn: false,
  //       },
  //     };
  //   }
  const [isVisitor, setIsVisitor] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSigningIn = () => {
    // this.setState({
    //   userStatus: { isVisitor: false, isSigningIn: true },
    // });
    setIsVisitor(!isVisitor);
    setIsSigningIn(!isSigningIn);
  };

  const onSignedIn = () => {
    // this.setState({
    //   userStatus: { isSigningIn: false, isSignedIn: true },
    // });
    setIsSigningIn(!isSigningIn);
    setIsSignedIn(!isSignedIn);
  };

  // render() {
  return (
    <div>
      {/* NOTE Static navigation header */}

      <Navbar
        color="dark"
        dark
        expand="sm"
        fixed="top"
        // className="justify-content-center"
      >
        <NavbarBrand href="/" className="p-0">
          IOU Web App
        </NavbarBrand>
        <Nav className="ml-auto p-0">
          <NavItem>
            <Button color="primary" size="sm" outline onClick={onSigningIn}>
              Sign in
            </Button>
          </NavItem>
          <NavItem>
            <Button color="secondary" size="sm" outline>
              Log in
            </Button>
          </NavItem>
        </Nav>
      </Navbar>

      {/* NOTE Dynamic content */}

      <WelcomeBanner
        // isDisplay={this.state.userStatus.isVisitor}
        isDisplay={isVisitor}
        // onSigningIn={() => this.onSigningIn()}
        onSigningIn={onSigningIn}
      ></WelcomeBanner>

      <Row className="justify-content-between">
        <Col id="left-col" xs="3">
          <UserMenu
            // isDisplay={this.state.userStatus.isSignedIn}
            isDisplay={isSignedIn}
          ></UserMenu>
        </Col>

        <Col id="middle-col" xs="auto">
          {" "}
          <UserSignIn
            // isDisplay={this.state.userStatus.isSigningIn}
            isDisplay={isSigningIn}
            // onSignedIn={() => this.onSignedIn()}
            onSignedIn={onSignedIn}
          ></UserSignIn>
          <CreatePost
            // isDisplay={this.state.userStatus.isSignedIn}
            isDisplay={isSignedIn}
          ></CreatePost>
          {/* TODO Change according to user menu option selected */}
          <DisplayPosts
            // isDisplay={!this.state.userStatus.isSigningIn}
            isDisplay={!isSigningIn}
          ></DisplayPosts>
        </Col>

        <Col id="right-col" xs="3">
          <Leaderboard
            // isDisplay={!this.state.userStatus.isSigningIn}
            isDisplay={!isSigningIn}
          ></Leaderboard>
        </Col>
      </Row>
    </div>
  );
  // }
};

export default App;
