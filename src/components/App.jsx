import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
// import { createBrowserHistory } from 'history/createBrowserHistory';

import { AppCreation } from './appCreation/AppCreation';
import { Header } from './navigation/Header';
import { LeftMenu } from './navigation/LeftMenu';
import { Login } from './login/Login';
import { FileUpload } from './appCreation/fileUpload/FileUpload';

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);

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
                            <Route exact path="/" component={Home} />
                            <Route path="/createApp" component={AppCreation} />
                            {/* <Route path="/createApp" component={AppCreation}>
                                <IndexRoute component={FileUpload} />
                            </Route> */}
                            <Route path="/login" component={Login} />
                        </div>
                    </div>            
                </div>
            </Router>
        )
    }
}   

ReactDOM.render(<App/>, document.getElementById("app"))