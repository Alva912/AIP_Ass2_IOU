import React, { Component } from "react";

class LeadUser extends Component {
  render() {
    return (
      <li className="media text-muted pt-1">
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
        <p className="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
          <small className="d-block text-gray-dark">@Username</small>
        </p>
      </li>
    );
  }
}
class Leaderboard extends Component {
  render() {
    return (
      <div id="leaderboard" className="card-body">
        <h6 className="card-title">Leaderboard</h6>
        <ol className="card-text">
          <LeadUser></LeadUser>
          <LeadUser></LeadUser>
          <LeadUser></LeadUser>
          <LeadUser></LeadUser>
          <LeadUser></LeadUser>
          <LeadUser></LeadUser>
        </ol>
      </div>
    );
  }
}
export default Leaderboard;
