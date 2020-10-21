import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import UserSignUp from "../Components/UserSignUp.js";

const SignUp = (props) => {
  return (
    <Row className="justify-content-between">
      <Col id="left-col" xs="3"></Col>

      <Col id="middle-col" xs="auto">
        <UserSignUp
        //   onLoggedIn={(_user) => props.onLoggedIn(_user)}
        ></UserSignUp>
        <Link to="/login">Already have an account?</Link>
      </Col>

      <Col id="right-col" xs="3"></Col>
    </Row>
  );
};

export default SignUp;
