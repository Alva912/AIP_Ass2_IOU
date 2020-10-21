import React from "react";
import { Row, Col } from "reactstrap";

const WelcomeBanner = React.lazy(() => import('../Components/WelcomeBanner'));
const DisplayPosts = React.lazy(() => import('../Components/DisplayPosts'));
const Leaderboard = React.lazy(() => import('../Components/Leaderboard'));

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
