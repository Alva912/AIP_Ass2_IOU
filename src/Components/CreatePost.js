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
  render() {
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <Card id="create-post" className="my-3">
        <Form id="post-form" className="card-body d-flex flex-column">
          <Input type="text" placeholder="Description"></Input>
          <InputGroup id="favor-option" size="sm">
            <CustomInput type="select" name="quest-type">
              <option selected disabled>
                Quest Type
              </option>
              <option value="cleaning">Cleaning</option>
              <option value="snacking">Snacking</option>
            </CustomInput>
            <CustomInput type="select" name="reward-type">
              <option selected disabled>
                Reward Type
              </option>
              <option value="coffee">Coffee</option>
              <option value="chocolate">Chocolate</option>
              <option value="mint">Mint</option>
              <option value="pizza">Pizza</option>
              <option value="cupcake">Cupcake</option>
            </CustomInput>
            <CustomInput type="select" name="reward-num">
              <option selected disabled>
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </CustomInput>
            <InputGroupAddon addonType="prepend">
              <Button outline color="secondary">
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
