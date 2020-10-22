import React from "react";
import { Row, Col } from "reactstrap";

import UserLogIn from "../Components/UserLogIn.js";

const LogIn = (props) => {
  return (
    <Row className="justify-content-between pt-5">
      <Col id="left-col" xs="3"></Col>

      <Col id="middle-col" xs="auto">
        <UserLogIn
        // onLoggedIn={(_user) => props.onLoggedIn(_user)}
        ></UserLogIn>
      </Col>

      <Col id="right-col" xs="3"></Col>
    </Row>
  );
};

export default LogIn;
