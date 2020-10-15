import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
    this.setState({ user: as_json.user });
  }

  handleChange(event, propName) {
    let inputs = this.state.userInput;
    inputs[propName] = event.target.value;
    this.setState({ userInput: inputs });
  }

  // ANCHOR Presentation
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <Form className="mt-5">
        <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
        <p>{this.state.userInput.userName}</p>
        <p>{this.state.userInput.lastName}</p>
        <p>{this.state.userInput.firstName}</p>
        <p>{this.state.userInput.email}</p>
        <p>{this.state.userInput.password}</p>
        <FormGroup>
          <Label for="userName">User Name</Label>
          <Input
            type="text"
            id="userName"
            className="form-control"
            placeholder="User Name"
            required
            autoFocus
            onChange={(event) => this.handleChange(event, "userName")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First Name"
            required
            onChange={(event) => this.handleChange(event, "firstName")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            required
            onChange={(event) => this.handleChange(event, "lastName")}
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

        <Button
          color="primary"
          size="lg"
          block
          onClick={() => {
            this.props.onLoggedIn();
            isDisplay = !isDisplay;
            this.handleClick();
          }}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}
export default UserSignUp;