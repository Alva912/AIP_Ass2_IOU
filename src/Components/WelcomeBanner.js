import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

class WelcomeBanner extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <Jumbotron id="welcome-banner" fluid className="text-center">
        <h2>Welcome to IOU</h2>
        <p className="lead">
          <Button
            color="primary"
            className="my-2"
            onClick={() => this.props.onSigningIn()}
          >
            Sign in
          </Button>
          <Button color="secondary" className="my-2">
            Log in
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default WelcomeBanner;