import React, { Component } from "react";

class WelcomeBanner extends Component {
  render() {
    return (
      <section id="welcome-banner" className="jumbotron jumbotron-fluid text-center">
        <h1>Welcome to IOU</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <a href="javascript:void(0);" className="btn btn-primary my-2">
            Sign in
          </a>
          <a href="javascript:void(0);" className="btn btn-secondary my-2">
            Log in
          </a>
        </p>
      </section>
    );
  }
}

export default WelcomeBanner;
