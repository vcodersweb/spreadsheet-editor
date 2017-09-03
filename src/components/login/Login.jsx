import React, { PropTypes as T } from 'react';
import styles from '../../styles/signin.css';
// import AuthenticationStore from '../../stores/AuthenticationStore';

export class Login extends React.Component {
    // static propTypes = {
    //     auth: T.instanceOf(AuthenticationStore),
    //   }
    
    constructor(props) {
        super(props);

        this.props =  props;

        this.state = {
            username: '',
            password: '',
        };
    }

    userNameChange(event) {
        this.setState({ username: event.target.value });
    }

    passWordChange(event) {
        this.setState({ password: event.target.value });
    }

    getAuthParams(event) {
        return {
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            username: this.state.username,
            password: this.state.password,
            realm: 'Username-Password-Authentication'
        };
    }
    
    formSubmit = (event) => {
        event.preventDefault();
// console.log(this.props.auth);
// var a = new AuthenticationStore();
// console.log(a);
        // this.props.auth
        // a.login(this.getAuthParams(), function (err) {
        //     if (err) {
        //       console.log('something went wrong: ' + err);
        //     }
        // });
    }

    render() {
        const username = "";
        const password = "";

        return (
            <form className="form-signin" action="" onSubmit={this.formSubmit}>
                <h2 className="form-signin-heading"></h2>
                <div className="form-group">
                    <label htmlFor="Username" className="sr-only">Username</label>
                    <input type="text" id="Username" className="form-control" placeholder="Enter username" value={this.username}  onChange={this.userNameChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="Password" className="sr-only">Password</label>
                    <input type="text" id="Password" className="form-control" placeholder="Enter password" value={this.password} onChange={this.passWordChange.bind(this)}></input>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};