import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const UserSignUp = lazy(() => import("../Components/UserSignUp"));

const SignUp = (props) => {
  return (
    <Row className="justify-content-between pt-5">
      <Col id="left-col" xs="3"></Col>

      <Col id="middle-col" xs="auto">
        <UserSignUp onLogIn={props.func}></UserSignUp>
        <Link to="/login">Already have an account?</Link>
      </Col>

      <Col id="right-col" xs="3"></Col>
    </Row>
  );
};

export default SignUp;
