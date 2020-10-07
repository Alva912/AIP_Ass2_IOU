import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="media text-muted pt-3">
        <svg
          className="bd-placeholder-img mr-2 rounded"
          width="32"
          height="32"
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
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong className="d-block text-gray-dark">
            @Username<small> 3 days ago</small>
          </strong>
          Please clean the fridge on the 2nd floor.
        </p>
      </div>
    );
  }
}

class DisplayPosts extends Component {
  render() {
    return (
      <div id="display-post">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
          <a className="navbar-brand mr-auto">Public Posts</a>
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </nav>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    );
  }
}

export default DisplayPosts;
