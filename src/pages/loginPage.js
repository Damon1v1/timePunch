import React,  { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../components/login';
import ClockIn from '../components/clockin';


class LoginPage extends Component {
    render () {
        return (
            <div className='loginPage'>
                <Router>
                    <Routes>
                        <Route path='/' Component = {LogIn} />
                        <Route path='/clockedin' Component = {ClockIn} />
                    </Routes>
                </Router>
            </div>
        )
    }
};

export default LoginPage;