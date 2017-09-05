import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, IndexRoute, Match } from 'react-router-dom';

import styles from '../../styles/bootstrap-nav-wizard.css';
import { FileUpload } from './fileUpload/FileUpload';
import { TableDesign } from './tableDesign/TableDesign';

export class AppCreation extends React.Component {
    render() {
        return (
            <div className="mt-2">
                <h1>Application creation wizard</h1>
                <ul className="nav nav-wizard">
                    <li className="">
                        <NavLink activeClassName='active' to="/createApp/upload">Upload</NavLink>
                    </li>
                    <li className="">
                        <NavLink activeClassName='active' to="/createApp/tableDesign">Define</NavLink>
                    </li>
                    <li className="">
                        <NavLink activeClassName='active' to="/createApp/preview">Preview</NavLink>
                    </li>
                    <li className="">
                        <NavLink activeClassName='active' to="/createApp/finish">Finish</NavLink>
                    </li>
                </ul>
                <Route path="/createApp/upload" component={FileUpload} />
                <Route path="/createApp/tableDesign" component={TableDesign} />
                <Route exact path="/createApp" render={() => (
                     <Redirect to="/createApp/upload"/>
                )}/>
            </div>
        )
    }
}