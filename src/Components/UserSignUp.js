import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        username: "",
        email: "",
        password: "",
      },
      currentUser: {
        id: "",
        name: "",
        email: "",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // ANCHOR
  async handleClick() {
    let data = this.state.userInput;
    let response = await fetch("/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    let as_json = await response.json();
    // let as_user = as_json.user;
    this.setState({
      currentUser: {
        id: as_json.user._id,
        name: as_json.user.username,
        email: as_json.user.email,
      },
    });
    this.props.onLogIn(this.state.currentUser);
  }

  handleChange(event, property) {
    let inputs = this.state.userInput;
    inputs[property] = event.target.value;
    this.setState({ userInput: inputs });
  }

  // ANCHOR Presentation
  render() {
    // let _user = this.state.currentUser;
    return (
      <Form className="mt-5">
        <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            type="text"
            id="username"
            className="form-control"
            placeholder="User Name"
            required
            autoFocus
            onChange={(event) => this.handleChange(event, "username")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(event) => this.handleChange(event, "email")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(event) => this.handleChange(event, "password")}
          ></Input>
        </FormGroup>

        <Link
          to="/signup"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            // this.props.onLoggedIn(this.state.currentUser);
            // isDisplay = !isDisplay;
            this.handleClick();
          }}
        >
          Sign Up
        </Link>
      </Form>
    );
  }
}
export default UserSignUp;
