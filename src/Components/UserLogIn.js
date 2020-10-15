import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserLogIn extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
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
          ></Input>
        </FormGroup>
        <Button
          color="primary"
          size="lg"
          block
          onClick={() => {
            this.props.onLoggedIn();
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
