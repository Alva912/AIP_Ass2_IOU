import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserSignIn extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <Form>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
            this.props.onSignedIn();
            isDisplay = !isDisplay;
          }}
        >
          Sign in
        </Button>
      </Form>
    );
  }
}
export default UserSignIn;
