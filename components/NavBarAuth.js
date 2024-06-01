/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

function NavBarAuth() {
  return (
    <Navbar style={{ background: '#ff8c00', font: 'bold' }} collapseOnSelect expand="lg">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>SEND!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/climbs/new">
              <Nav.Link>Add a Climb</Nav.Link>
            </Link>
            <Link passHref href="/futureClimbs">
              <Nav.Link>Future Climbs</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link passHref href="/profile">
              <Nav.Link id="right-nav">Profile</Nav.Link>
            </Link>
            <Button id="right-nav" variant="danger" style={{ background: '#8b0000', border: 'solid 1px black' }} onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAuth;
