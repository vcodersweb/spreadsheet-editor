import React from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute, Match } from 'react-router-dom';

import styles from '../../styles/bootstrap-nav-wizard.css';
import { FileUpload } from './fileUpload/FileUpload';
import { TableDesign } from './tableDesign/TableDesign';

export class AppCreation extends React.Component {
    render() {
        return (
            <div className="mt-2">
                {/* <ul className="nav navbar-nav list-inline"> */}
                <h1>Application creation wizard</h1>
                <ul className="nav nav-wizard">
                    <li className="active">
                        <Link to="/createApp/upload">Upload</Link>
                    </li>
                    <li className="">
                        <Link to="/createApp/tableDesign">Define</Link>
                    </li>
                    <li className="">
                        <Link to="/createApp/upload">Preview</Link>
                    </li>
                    <li className="">
                        <Link to="/createApp/tableDesign">Finish</Link>
                    </li>
                </ul>
                {/* <FileUpload /> */}
                {/* <Route path="/createApp/" component={FileUpload} /> */}
                {/* <Route path="/createApp/define" component={FileUpload} /> */}
                {/* <Route path="/createApp/tableDesign" component={TableDesign} /> */}
                {/* <Route path="/createApp">
                    <IndexRoute component={AppCreation} /> */}
                    <Route path="/createApp/upload" component={FileUpload} />
                    <Route path="/createApp/tableDesign" component={TableDesign} />
                {/* </Route> */}
                <Route exact path="/createApp" render={() => (
                    <FileUpload />
                )}/>
                {/* <Match exact pattern="/createApp" component={FileUpload} /> */}
            </div>
        )
    }
}