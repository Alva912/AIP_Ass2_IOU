import React from "react";
import { Row, Col } from "reactstrap";

import WelcomeBanner from "../Components/WelcomeBanner.js";
import DisplayPosts from "../Components/DisplayPosts.js";
import Leaderboard from "../Components/Leaderboard.js";

const Home = (props) => {
  return (
    <div>
      <WelcomeBanner></WelcomeBanner>

      <Row className="justify-content-between">
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
