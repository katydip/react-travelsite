import React, { Component } from 'react';
import './Navigation.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">My Travel Site</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Stuff</NavItem>
        <NavItem eventKey={4} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

</div>
    );
  }
}

export default Navigation;
