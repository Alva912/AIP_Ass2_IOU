import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";

import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Components/TestAPI.js";

import WelcomeBanner from "./Components/WelcomeBanner.js";
import UserMenu from "./Components/UserMenu.js";
import UserSignIn from "./Components/UserSignIn.js";
import CreatePost from "./Components/CreatePost.js";
import DisplayPosts from "./Components/DisplayPosts.js";
import Leaderboard from "./Components/Leaderboard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: {
        isVisitor: true,
        isSigningIn: false,
        isSignedIn: false,
      },
    };
  }

  onSigningIn() {
    this.setState({
      userStatus: { isVisitor: false, isSigningIn: true },
    });
  }

  onSignedIn() {
    this.setState({
      userStatus: { isSigningIn: false, isSignedIn: true },
    });
  }

  render() {
    return (
      <div>
        <Navbar
          color="dark"
          dark
          expand="md"
          fixed="top"
          className="justify-content-center"
        >
          <NavbarBrand href="/" color="light">
            IOU Web App
          </NavbarBrand>
        </Navbar>
        <WelcomeBanner
          isDisplay={this.state.userStatus.isVisitor}
          onSigningIn={() => this.onSigningIn()}
        ></WelcomeBanner>
        <Row className="justify-content-between pt-5">
          <Col id="left-col" xs="3">
            <UserMenu isDisplay={this.state.userStatus.isSignedIn}></UserMenu>
          </Col>
          <Col id="middle-col" xs="auto">
            {" "}
            <UserSignIn
              isDisplay={this.state.userStatus.isSigningIn}
              onSignedIn={() => this.onSignedIn()}
            ></UserSignIn>
            <CreatePost
              isDisplay={this.state.userStatus.isSignedIn}
            ></CreatePost>
            <DisplayPosts
              isDisplay={!this.state.userStatus.isSigningIn}
            ></DisplayPosts>
          </Col>
          <Col id="right-col" xs="3">
            <Leaderboard
              isDisplay={!this.state.userStatus.isSigningIn}
            ></Leaderboard>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("testAPI"));
