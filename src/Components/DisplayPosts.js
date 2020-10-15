import React, { Component } from "react";
import { Navbar, NavbarBrand, Form, Input, Media } from "reactstrap";

class Post extends Component {
  render() {
    return (
      <Media className="text-muted pt-3">
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
        <Media
          body
          className="pb-3 mb-0 small lh-125 border-bottom border-gray"
        >
          <strong className="d-block text-gray-dark">
            @Username<small> 3 days ago</small>
          </strong>
          Please clean the fridge on the 2nd floor.
        </Media>
      </Media>
    );
  }
}

class DisplayPosts extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <div id="display-post">
        <Navbar expand="lg" color="light" light className="rounded">
          <NavbarBrand className="mr-auto">Public Posts</NavbarBrand>
          <Form inline className="my-2 my-md-0">
            <Input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></Input>
          </Form>
        </Navbar>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
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
