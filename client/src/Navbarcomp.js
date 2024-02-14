import React, { Component } from 'react';
import "./Navbarcomp.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class Navbarcomp extends Component {
    render() {
        return (
            <div>
                /* Navbar component with React Bootstrap */
                <Navbar bg="light" expand="lg">
                    /* Brand link */
                    <Navbar.Brand href="#">Good First Issues</Navbar.Brand>
                    /* Navbar toggle button */
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        /* Navbar links */
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            /* Home link */
                            <Nav.Link href="#action1"><Link to="/home">Home</Link></Nav.Link>
                            /* About Us link */
                            <Nav.Link href="#action1"><Link to="/about">About Us</Link></Nav.Link>
                            /* Explore OpenSource link */
                            <Nav.Link href="#action1"><Link to="/opensource">Explore OpenSource</Link></Nav.Link>

                            /* Dropdown menu for categories */
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            /* Disabled link */
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        /* Search form */
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
