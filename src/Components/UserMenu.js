import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let itemName = this.props.itemName;
    let itemId = this.props.itemId;
    return (
      <NavItem>
        <NavLink href="/user/:id" className="text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          {itemName}
        </NavLink>
      </NavItem>
    );
  }
}
class UserMenu extends Component {
  render() {
    // let isDisplay = this.props.isDisplay;
    let userId = this.props.userId;
    let userName = this.props.userName;
    if (userId == null) {
      return null;
    }
    return (
      <div id="user-menu" className="sidebar-sticky sticky-top pt-5">
        <Nav className="flex-column">
          <MenuItem itemName={userName} itemId={userId}></MenuItem>
          <MenuItem itemName="Favor - U owe to Others"></MenuItem>
          <MenuItem itemName="Favor - Others owe U"></MenuItem>
          <MenuItem itemName="My Quests"></MenuItem>
        </Nav>
      </div>
    );
  }
}
export default UserMenu;
