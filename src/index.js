import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";

import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Components/TestAPI.js";

import WelcomeBanner from "./Components/WelcomeBanner.js";
import UserMenu from "./Components/UserMenu.js";
import CreatePost from "./Components/CreatePost.js";
import DisplayPosts from "./Components/DisplayPosts.js";
import Leaderboard from "./Components/Leaderboard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: false,
    };
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
        <WelcomeBanner isDisplay={!this.state.userLogin}></WelcomeBanner>
        <Row>
          <Col id="left-col" xs="3">
            <UserMenu isDisplay={this.state.userLogin}></UserMenu>
          </Col>
          <Col id="middle-col" xs="auto">
            <CreatePost isDisplay={this.state.userLogin}></CreatePost>
            <DisplayPosts></DisplayPosts>
          </Col>
          <Col id="right-col" xs="3">
            <Leaderboard></Leaderboard>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("testAPI"));
