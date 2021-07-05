import React, { Component } from 'react';
import "./Navbarcomp.css";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default class Navbarcomp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Good First Issues</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1"><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link href="#action1"><Link to="/about">About Us</Link></Nav.Link>
      <Nav.Link href="#action1"><Link to="/opensource">Explore OpenSource</Link></Nav.Link>
      
     
      <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
