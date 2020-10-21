import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

class WelcomeBanner extends Component {
  render() {
    // let isDisplay = this.props.isDisplay;
    // if (!isDisplay) {
    //   return null;
    // }
    return (
      <Jumbotron id="welcome-banner" fluid className="text-center pt-5">
        <h2>Welcome to IOU</h2>
        <p className="lead">
          <Button
            color="primary"
            className="my-2"
            // onClick={() => this.props.onSigningUp()}
          >
            Sign Up
          </Button>
          <Button
            color="secondary"
            className="my-2"
            // onClick={() => this.props.onLoggingIn()}
          >
            Log In
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default WelcomeBanner;
