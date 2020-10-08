import React, { Component } from "react";
import { CardBody, CardTitle, Media } from "reactstrap";

class LeadUser extends Component {
  render() {
    return (
      <Media className="text-muted pt-1">
        <svg
          className="bd-placeholder-img mr-2 rounded"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 32x32"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#fffff"></rect>
          <text x="50%" y="50%" fill="#fffff" dy=".3em">
            32x32
          </text>
        </svg>
        <Media
          body
          className="pb-1 mb-0 small lh-125 border-bottom border-gray"
        >
          <small className="d-block text-gray-dark">@Username</small>
        </Media>
      </Media>
    );
  }
}
class Leaderboard extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <CardBody id="leaderboard">
        <CardTitle>Leaderboard</CardTitle>
        <LeadUser></LeadUser>
        <LeadUser></LeadUser>
        <LeadUser></LeadUser>
        <LeadUser></LeadUser>
        <LeadUser></LeadUser>
        <LeadUser></LeadUser>
      </CardBody>
    );
  }
}
export default Leaderboard;
