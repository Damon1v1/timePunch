import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Johns from '../assets/johns.png';

class Header extends Component {
    render (){
        return (
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>{Johns}</Navbar.Brand>
                    <Navbar.Text>Signed in as: </Navbar.Text>
                </Container>
            </Navbar>
        );
    };
};

export default Header;