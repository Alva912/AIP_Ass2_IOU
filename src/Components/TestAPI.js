import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // email: "",
      // testRes: "",
    };

    // NOTE must have, don't know why
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // ANCHOR initial GET request in the lifecycle, this will set init count to 10
  async componentDidMount() {
    let response = await fetch("/api/count");
    let json = await response.json();
    this.setState({ testRes: json.result });
  }

  // ANCHOR increase count using async/await
  async handleClick() {
    let data = {
      current: this.state.count,
      increment: 1,
    };
    let response = await fetch("/api/increment", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    let as_json = await response.json();
    this.setState({ count: as_json.count });
  }

  // handleChange(event) {
  //   this.setState({ email: event.target.email });
  // }

  render() {
    return (
      <div>
        <h3 className="text-primary">Click +1 to Test API</h3>
        <p>
          Current count:
          <span>{this.state.count}</span>
        </p>
        <button onClick={this.handleClick}>+1</button>
        {/* <form>
          <span>Email:{this.state.email}</span>
          <span>Result:{this.state.result}</span>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.handleClick}>Submit</button>
        </form> */}
      </div>
    );
  }
}

export default Counter;
