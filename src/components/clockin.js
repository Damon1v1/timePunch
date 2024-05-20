import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';
import axios from 'axios';

class ClockIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockedIn: localStorage.getItem('isClockedIn') === 'true',
            clockInTime: localStorage.getItem('clockInTime') ? new Date(localStorage.getItem('clockInTime')) : null,
            totalTime: localStorage.getItem('totalTime') ? parseInt(localStorage.getItem('totalTime'), 10) : 0,
        };
    }

    handleClockInOut = async () => {
        const { isClockedIn, clockInTime } = this.state;

        // Toggle clock in/out status
        const newIsClockedIn = !isClockedIn;
        
        // Update local state and storage
        this.setState({ isClockedIn: newIsClockedIn });
        localStorage.setItem('isClockedIn', newIsClockedIn.toString());

        // Send clock in/out time to backend
        try {
            if (newIsClockedIn) {
                // Clocking in
                const res = await axios.post('http://localhost:3001/clockIn', { clockInTime: new Date() });
                console.log('Clock in response:', res.data);
            } else {
                // Clocking out
                const clockOutTime = new Date();
                const duration = Math.floor((clockOutTime - clockInTime) / 1000); // Duration in seconds
                const res = await axios.post('http://localhost:3001/clockOut', { clockOutTime, duration });
                console.log('Clock out response:', res.data);
            }
        } catch (error) {
            console.error('Clock in/out error:', error);
            // Handle error
        }
    };

    formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}h ${mins}m ${secs}s`;
    };

    render() {
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