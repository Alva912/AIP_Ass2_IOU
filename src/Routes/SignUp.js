import React from "react";
import { Row, Col } from "reactstrap";

import UserSignUp from "../Components/UserSignUp.js";

const SignUp = (props) => {
  return (
    <Row className="justify-content-between">
      <Col id="left-col" xs="3"></Col>

      <Col id="middle-col" xs="auto">
        <UserSignUp
          onLoggedIn={(_user) => props.onLoggedIn(_user)}
        ></UserSignUp>
      </Col>

      <Col id="right-col" xs="3"></Col>
    </Row>
  );
};

export default SignUp;
