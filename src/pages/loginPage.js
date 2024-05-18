import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from '../components/login';
import ClockIn from '../components/clockin';


const loginPage = () => {
    return (
        <div className='loginPage'>
            <Router>
                <Switch>
                    <Route path='/' component = {LogIn} />
                    <Route path='/clockedin' component = {ClockIn} />
                </Switch>
            </Router>
        </div>
    )
};

export default loginPage;