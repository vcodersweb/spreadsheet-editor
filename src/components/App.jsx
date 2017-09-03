import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history/createBrowserHistory';

import { FileUpload } from './fileUpload/FileUpload';
import { Header } from './navigation/Header';
import { LeftMenu } from './navigation/LeftMenu';
import { Login } from './login/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Router>
            <div className="container-fluid">
                <div>
                    <Header />
                </div>
                <div className="row">
                    <LeftMenu />
                    <div className="col-sm-9 col-lg-10">
                        <Route exact path="/" component={FileUpload} />
                        {/* <Route exact path="/CreateApplication" component={Schedule} /> */}
                        <Route path="/login" component={Login} />
                    </div>
                </div>            
            </div>
        </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))