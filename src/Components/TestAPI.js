// NOTE 用来测试后端api
// NOTE 输入并按下按钮会在数据库artists表单插入新的一行

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
      bio: "",
      artist: {},
    };

    // NOTE must have, don't know why
    this.handleClick = this.handleClick.bind(this);
  }

  // ANCHOR initial GET request in the lifecycle, this will set init count to 10
  async componentDidMount() {
    let response = await fetch("/artists");
    let as_json = await response.json();
    console.log(as_json.artist);
    this.setState({ artist: as_json.artist });
  }

  // ANCHOR increase count using async/await
  async handleClick() {
    let data = {
      name: this.state.name,
      bio: this.state.bio,
    };
    let response = await fetch("/artists", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    let as_json = await response.json();
    // this.setState({ count: as_json.count });
    this.setState({ artist: as_json.artist });
  }

  render() {
    return (
      <div>       
        <h3 className="text-primary">Click +1 to Test API</h3>
        <p>
          Current count:value
          <span>{this.state.count}</span>
          <span>{this.state.name}</span>
          <span>{this.state.bio}</span>
        </p>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Bio"
          onChange={(event) => {
            this.setState({ bio: event.target.value });
          }}
        ></input>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default Counter;
