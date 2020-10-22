import React, { Component } from "react";
import {
  Card,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  CustomInput,
  Button,
} from "reactstrap";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        publisher_user: "5f9121c7111644029a38880e",
        quest_type: "",
        quest_description: "",
        reward: "",
        post_date: "",
        due_date: "",
        acceptant_user: null,
        post_state: "Initial",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick() {
    let data = this.state.userInput;
    let response = await fetch("/post/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    let as_json = await response.json();
    let post = as_json.post;
    this.props.onCreatePost({
      post_id: post._id,
      publisher_user: post.publisher_user,
      quest_type: post.quest_type,
      quest_description: post.quest_description,
      reward: post.reward,
      post_date: post.post_date,
      due_date: post.due_date,
      acceptant_user: post.acceptant_user,
      post_state: post.post_state,
    });
  }

  handleChange(event, property) {
    let inputs = this.state.userInput;
    inputs[property] = event.target.value;
    this.setState({ userInput: inputs });
  }

  render() {
    return (
      <Card id="create-post" className="my-3 mt-5">
        <Form id="post-form" className="card-body d-flex flex-column">
          <Input
            type="text"
            placeholder="quest_description"
            onChange={(event) => this.handleChange(event, "quest_description")}
          ></Input>
          <InputGroup id="favor-option" size="sm">
            <CustomInput
              type="select"
              id="quest_type"
              onChange={(event) => this.handleChange(event, "quest_type")}
            >
              <option defaultValue disabled>
                Quest Type
              </option>
              <option value="cleaning">Cleaning</option>
              <option value="snacking">Snacking</option>
            </CustomInput>
            <CustomInput
              type="select"
              id="reward"
              onChange={(event) => this.handleChange(event, "reward")}
            >
              <option defaultValue disabled>
                Reward Type
              </option>
              <option value="coffee">Coffee</option>
              <option value="chocolate">Chocolate</option>
              <option value="mint">Mint</option>
              <option value="pizza">Pizza</option>
              <option value="cupcake">Cupcake</option>
            </CustomInput>
            {/* <CustomInput
              type="select"
              id="reward_num"
              onChange={(event) => this.handleChange(event, "reward_num")}
            >
              <option defaultValue disabled>
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </CustomInput> */}
            <InputGroupAddon addonType="prepend">
              <Button
                outline
                color="secondary"
                onClick={() => {
                  this.handleClick();
                }}
              >
                Post a request
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Card>
    );
  }
}

export default CreatePost;
