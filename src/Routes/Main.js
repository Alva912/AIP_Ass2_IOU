import React, { lazy } from "react";
// import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

const UserMenu = lazy(() => import("../Components/UserMenu"));
const CreatePost = lazy(() => import("../Components/CreatePost"));
const DisplayPosts = lazy(() => import("../Components/DisplayPosts"));
const Leaderboard = lazy(() => import("../Components/Leaderboard"));

const Main = (props) => {
  return (
    <Row className="justify-content-between pt-5">
      <Col id="left-col" xs="3">
        <UserMenu userId={props.user.id} userName={props.user.name}></UserMenu>
      </Col>

      <Col id="middle-col" xs="auto">
        <CreatePost onCreatePost={props.func}></CreatePost>
        <DisplayPosts></DisplayPosts>
      </Col>

      <Col id="right-col" xs="3">
        <Leaderboard></Leaderboard>
      </Col>
    </Row>
  );
};

export default Main;
