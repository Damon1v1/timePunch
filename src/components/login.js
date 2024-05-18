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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Employee name:', empName);
        history('/clockedin')
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