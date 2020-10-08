import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class MenuItem extends Component {
  render() {
    let itemName = this.props.itemName;
    return (
      <NavItem>
        <NavLink href="/" className="text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
    let isDisplay = this.props.isDisplay;
    if (!isDisplay) {
      return null;
    }
    return (
      <div id="user-menu" className="sidebar-sticky pt-3" display={isDisplay}>
        <Nav className="flex-column">
          <MenuItem itemName="Username"></MenuItem>
          <MenuItem itemName="Favor - U owe to Others"></MenuItem>
          <MenuItem itemName="Favor - Others owe U"></MenuItem>
          <MenuItem itemName="My Quests"></MenuItem>
        </Nav>
      </div>
    );
  }
}
export default UserMenu;
