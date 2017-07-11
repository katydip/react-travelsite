import React, { Component } from 'react';
import './Footer.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div id="bottom">
      <Navbar inverse bottom collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">&copy; Travel is fun</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Facebook</NavItem>
        <NavItem eventKey={2} href="#">Twitter</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

</div>
    );
  }
}

export default Footer;
