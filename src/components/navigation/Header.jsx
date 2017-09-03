import React from 'react';
// import { Router, Route, browserHistory, Link } from 'react-router';

export class Header extends React.Component {
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-default">
            <nav className="navbar navbar-default navbar-toggleable-md navbar-inverse bg-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Maintenance scheduler</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><a href="/" className="nav-link">Create Application</a></li>
                            <li className="nav-item"><a href="/schedule" className="nav-link">Schedule</a></li>
                            <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
                            <li className="nav-item"><a href="/login" className="nav-link"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            {/* <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}