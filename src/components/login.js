import React, { useState } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';
import axios from 'axios';

function LogIn() {
    const [empname, setEmpName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setEmpName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Employee name:', empname);
        
        try {
            // Add the user to the database
            await axios.post('http://localhost:3001/addUser', { empname });
            
            // Navigate to the next page
            navigate('/clockedin');
        } catch (error) {
            console.error('Error adding new entry:', error);
            // Display an error message to the user
        }
    };

    return (
        <Card id='login'>
            <Card.Body>
                <Card.Img variant="top" src={Calo} />
                <Card.Title>Calo time tracking</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <FormControl
                        type="text"
                        className="empName"
                        placeholder="Name"
                        value={empname}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Login</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LogIn;