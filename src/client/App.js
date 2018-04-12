import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './authentication/Login';
import CryptoChart from './CryptoChart';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => (
                    <div>
                        <Navbar inverse>
                            <Nav>
                                <NavItem href="/">
                                    <p>MonopolyShoe</p>
                                </NavItem>
                                <NavItem eventKey={1} href="/Dashboard">
                                    Portfolio
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={2} href="/login">
                                        Login
                                    </NavItem>
                                    <NavItem eventKey={3} href="#">
                                        Register
                                    </NavItem>
                                </Nav>
                        </Navbar>
                        <div className='crypto_chart'>
                            <CryptoChart />
                        </div>
                    </div>
                )} />

                <Route exact path="/Dashboard" render={()  => (
                    <div className='dashboard'>
                        <Dashboard />
                    </div>
                )} />

                <Route exact path="/login" render={()  => (
                    <div>
                        <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
                        <div id="container">
                            <div id="auth_box">
                                <div id="auth_logo">
                                    <p>Prolific Trading</p>
                                </div>
                                <div>
                                    <button>Log In</button>
                                    <button>Sign Up</button>
                                </div>
                                <div>
                                    <button>Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )} />

            </div>
        );
    }
}

export default App;
