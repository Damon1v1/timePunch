import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';


class ClockIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockedIn: localStorage.getItem('isClockedIn') === 'true',
        };
    }

    handleClockInOut = () => {
        const newClockStatus = !this.state.isClockedIn;
        this.setState({ isClockedIn: newClockStatus }, () => {
            localStorage.setItem('isClockedIn', newClockStatus.toString());
        });
    };

    render () {
        return (
            <Card id='clockin'>
                <Card.Img variant="top" src={Calo} />
                <Card.Body>
                    <Card.Title>Calo Clock In</Card.Title>
                    <Card.Text>Keep Track of Work for Calo Kitchen + Tequila</Card.Text>
                    <Button onClick={this.handleClockInOut}>
                        {this.state.isClockedIn ? 'Clock Out' : 'Clock In'}
                    </Button>
                    {this.state.isClockedIn ? (
                        <p>You are now clocked in.</p>
                    ) : (
                        <p>You are not clocked in.</p>
                    )}
                </Card.Body>
            </Card>
        );
    };
};

export default ClockIn;