import React, { Component, useState } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Calo from '../assets/calo.jpg';

function LogIn() {
    const [empName, setEmpName] = useState('');
    const history = useNavigate();

    const handleInputChange = (event) => {
        setEmpName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ empName })
            });
            
            if (response.ok) {
                console.log('Logged in successfully');
                // Redirect or handle success
            } else {
                console.error('Failed to login');
                // Handle failure
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
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
                        value={empName}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" >Login</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LogIn;