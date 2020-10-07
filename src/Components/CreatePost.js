import React, { Component } from "react";

class CreatePost extends Component {
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <div id="create-post" className="card my-3">
        <form action="" id="post-form" className="card-body d-flex flex-column">
          <input
            type="text"
            name=""
            id=""
            className=""
            style="height: 4rem;"
            placeholder="Description"
          ></input>
          <div className="favor-option input-group input-group-sm">
            <select name="quest-type" id="" className="custom-select">
              <option selected disabled>
                Quest Type
              </option>
              <option value="cleaning">Cleaning</option>
              <option value="snacking">Snacking</option>
            </select>
            <select name="reward-type" id="" className="custom-select">
              <option selected disabled>
                Reward Type
              </option>
              <option value="coffee">Coffee</option>
              <option value="chocolate">Chocolate</option>
              <option value="mint">Mint</option>
              <option value="pizza">Pizza</option>
              <option value="cupcake">Cupcake</option>
            </select>
            <select name="reward-num" id="" className="custom-select">
              <option selected disabled>
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-secondary">
                Post a request
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
