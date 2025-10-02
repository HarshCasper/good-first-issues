import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// Import the necessary Clerk components
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react"; 

function Navbarcomp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Your App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* The Opensource link should be available even if protected */}
            <Nav.Link href="/opensource">Opensource (Protected)</Nav.Link> 
          </Nav>
          
          {/* --- CLERK AUTHENTICATION BUTTONS START HERE --- */}
          <Nav>
            {/* 1. Show the UserButton (Account management/Sign Out) when signed in */}
            <SignedIn>
              <div style={{ padding: '0 10px' }}>
                <UserButton afterSignOutUrl="/home" />
              </div>
            </SignedIn>
            
            {/* 2. Show the Sign In/Sign Up button when signed out */}
            <SignedOut>
              <Nav.Link>
                {/* The SignInButton component will render a button 
                  that opens Clerk's pre-built sign-in/sign-up modal.
                */}
                <SignInButton mode="modal">
                  <button className="btn btn-primary">
                    Sign In / Sign Up
                  </button>
                </SignInButton>
              </Nav.Link>
            </SignedOut>
          </Nav>
          {/* --- CLERK AUTHENTICATION BUTTONS END HERE --- */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;