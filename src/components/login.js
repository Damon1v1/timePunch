import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Form from "react-bootstrap";
import Calo from '../assets/calo.jpg';

class LogIn extends Component {
    render () {
        return (
            <Card id = 'login'>
                <Card.Body>
                    <Card.Img variant="top" src={Calo} />
                    <Card.Title>Calo time tracking</Card.Title>
                    <Form.Control type="text" className="empName" placeholder="Name" />
                    <Button href="/clockedin">Login</Button>
                </Card.Body>
            </Card>
        );
    };
};

export default LogIn;