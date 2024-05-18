import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';


class ClockIn extends Component {
    render () {
        return  (
            <Card id = 'clockin'>
                <Card.Img variant="top" src={Calo} />
                <Card.Body>
                    <Card.Title>Calo Clock In</Card.Title>
                    <Card.Text>Keep Track of Work for Calo Kitchen + Tequila</Card.Text>
                    <Button>Clock In</Button>
                </Card.Body>
            </Card>
        );
    };
};

export default ClockIn;