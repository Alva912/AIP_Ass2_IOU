import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // NOTE must have, don't know why
    this.handleClick = this.handleClick.bind(this);
  }

  // ANCHOR initial GET request in the lifecycle, this will set init count to 10
  async componentDidMount() {
    let response = await fetch("/api/count");
    let json = await response.json();
    this.setState({ count: json.count });
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

  render() {
    return (
      <div>
        <h3 className="text-primary">API is woring</h3>
        <p>
          Current count:
          <span>{this.state.count}</span>
        </p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("testAPI"));
