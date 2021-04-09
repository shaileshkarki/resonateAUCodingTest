import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
      background-color: #222;  
      width: 100%; 
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="xl">
            <Navbar.Brand href="/">Resonate Australia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                {/* <Nav.Item><Nav.Link href="/recipeByIngredients">Show Recipe By Ingredients</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/aboutUs">About Us</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contactUs">Contact Us</Nav.Link></Nav.Item> */}
            </Nav>
        </Navbar>
    </Styles>
)