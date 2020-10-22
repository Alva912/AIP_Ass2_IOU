import React, { lazy } from "react";
import { Row, Col } from "reactstrap";

const DisplayPosts = lazy(() => import("../Components/DisplayPosts"));
const Leaderboard = lazy(() => import("../Components/Leaderboard"));

const Home = (props) => {
  return (
    <div>
      <Row className="justify-content-between pt-5">
        <Col id="left-col" xs="3"></Col>

        <Col id="middle-col" xs="auto">
          <DisplayPosts></DisplayPosts>
        </Col>

        <Col id="right-col" xs="3">
          <Leaderboard></Leaderboard>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
