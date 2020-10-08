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
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p className="lead">
          <Button color="primary" className="my-2">
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
