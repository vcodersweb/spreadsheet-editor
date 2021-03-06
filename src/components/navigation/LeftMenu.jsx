import React from 'react';

export class LeftMenu extends React.Component {
    render() {
        return (
            <div className="col-sm-3 col-lg-2">
                <nav className="navbar navbar-default navbar-fixed-side">
                {/* <div className="container">
                    <div className="navbar-header"> */}
                        <ul className="nav">
                            <li className="nav-item"><a href="/createApp" className="nav-link">Create Application</a></li>
                            <li className="nav-item"><a href="/viewApp" className="nav-link">View Application</a></li>
                            <li className="nav-item"><a href="/modifyApp" className="nav-link">Modify Application</a></li>
                        </ul>
                    {/* </div>
                </div> */}
                </nav>
            </div>
        );
    }
}