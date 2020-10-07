import React from "react";
import ReactDOM from "react-dom";

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
        <nav className="navbar nax`vbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container justify-content-center">
            <div
              className="nav-item spinner-border spinner-border-sm text-light mx-3"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <a href="javascript:void(0);" className="nav-brand text-light">
              IOU Web App
            </a>
            <div
              className="nav-item spinner-border spinner-border-sm text-light mx-3"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </nav>
        <WelcomeBanner></WelcomeBanner>
        <div className="row">
          <div id="left-col" className="col-3 d-md-block sidebar collapse">
            <UserMenu isDisplay={this.state.userLogin}></UserMenu>
          </div>
          <div id="middle-col" className="col-6 bg-light">
            <CreatePost isDisplay={this.state.userLogin}></CreatePost>
            <DisplayPosts></DisplayPosts>
          </div>
          <div id="right-col" className="col-3">
            <Leaderboard></Leaderboard>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("testAPI"));
