import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserLogIn extends Component {
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
    let response = await fetch("/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    let as_json = await response.json();
    this.setState({
      currentUser: {
        id: as_json.user._id,
        name: as_json.user.username,
        email: as_json.user.email,
      },
    });
  }

  handleChange(event, property) {
    let inputs = this.state.userInput;
    inputs[property] = event.target.value;
    this.setState({ userInput: inputs });
  }

  render() {
    let isDisplay = this.props.isDisplay;
    let _user = this.state.currentUser;
    if (!isDisplay) {
      return null;
    }
    return (
      <Form className="mt-5">
        <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
        <FormGroup>
          <Label for="inputEmail" className="sr-only">
            Email address
          </Label>
          <Input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={(event) => this.handleChange(event, "email")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="inputPassword" className="sr-only">
            Password
          </Label>
          <Input
            type="password"
            id="inputPassword"
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
          onClick={(_user) => {
            this.handleClick();
            this.props.onLoggedIn(_user);
            isDisplay = !isDisplay;
          }}
        >
          Log In
        </Button>
      </Form>
    );
  }
}
export default UserLogIn;
