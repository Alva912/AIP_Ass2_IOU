import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";

import UserMenu from "../Components/UserMenu.js";
import CreatePost from "../Components/CreatePost.js";
import DisplayPosts from "../Components/DisplayPosts.js";
import Leaderboard from "../Components/Leaderboard.js";

const Main = (props) => {
  let { id } = useParams();
  return (
    <Row className="justify-content-between pt-5">
      <Col id="left-col" xs="3">
        <div>Now showing post {id}</div>
        <UserMenu
        //   userName={props.currentUser.name}
        //   userId={props.currentUser.id}
        ></UserMenu>
      </Col>

      <Col id="middle-col" xs="auto">
        <CreatePost></CreatePost>
        <DisplayPosts></DisplayPosts>
      </Col>

      <Col id="right-col" xs="3">
        <Leaderboard></Leaderboard>
      </Col>
    </Row>
  );
};

export default Main;
