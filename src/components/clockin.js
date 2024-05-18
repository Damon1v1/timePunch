import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';


class ClockIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockedIn: localStorage.getItem('isClockedIn') === 'true',
            clockInTime: localStorage.getItem('clockInTime') ? new Date(localStorage.getItem('clockInTime')) : null,
            totalTime: localStorage.getItem('totalTime') ? parseInt(localStorage.getItem('totalTime'), 10) : 0,
        };
    }

    handleClockInOut = () => {
        if (this.state.isClockedIn) {
            // User is clocking out
            const clockOutTime = new Date();
            const clockInTime = this.state.clockInTime;
            const duration = (clockOutTime - clockInTime) / 1000; // Duration in seconds
            const totalTime = this.state.totalTime + duration;

            this.setState({ 
                isClockedIn: false, 
                clockInTime: null,
                totalTime 
            }, () => {
                localStorage.setItem('isClockedIn', 'false');
                localStorage.removeItem('clockInTime');
                localStorage.setItem('totalTime', totalTime.toString());
            });
        } else {
            // User is clocking in
            const clockInTime = new Date();
            this.setState({ 
                isClockedIn: true, 
                clockInTime 
            }, () => {
                localStorage.setItem('isClockedIn', 'true');
                localStorage.setItem('clockInTime', clockInTime.toString());
            });
        }
    };

    formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}h ${mins}m ${secs}s`;
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