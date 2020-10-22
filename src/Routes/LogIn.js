import React, { lazy } from "react";
import { Row, Col } from "reactstrap";

const UserLogIn = lazy(() => import("../Components/UserLogIn"));

const LogIn = (props) => {
  return (
    <Row className="justify-content-between pt-5">
      <Col id="left-col" xs="3"></Col>

      <Col id="middle-col" xs="auto">
        <UserLogIn onLogIn={props.func}></UserLogIn>
      </Col>

      <Col id="right-col" xs="3"></Col>
    </Row>
  );
};

export default LogIn;
