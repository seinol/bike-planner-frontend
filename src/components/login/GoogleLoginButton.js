import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { Redirect } from "react-router-dom";

// TODO prio 1: fix this
// const CLIENT_ID = process.env.REACT_APP_GOOGLE_IDENTITY_SERVICE_CLIENT_ID;
const CLIENT_ID = '1099018549105-d14q96lthqjqrt4h5s48c53ov8tqegc2.apps.googleusercontent.com';

class GoogleLoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: '',
      redirect: null
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      this.setState(state => ({
        isLoggedIn: true,
        accessToken: response.accessToken
      }));
      // this.setState({ redirect: "/" });
    }
  }

  logout() {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }));
    // this.setState({ redirect: "/" });
  }

  handleLoginFailure(response) {
    console.log('Failed to login')
    console.log(response);
  }

  handleLogoutFailure(response) {
    console.log('Failed to logout')
    console.log(response);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        {
          this.state.isLoggedIn ?
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText='Logout from Google'
            onSuccess={this.logout}
            onFailure={this.handleLogoutFailure} />
            :
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Sign in with Google'
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            responseType='code,token' />
        }
        {
          this.state.accessToken ? <h5>OK</h5> : <h5>Not OK</h5>
        }

      </div>
    )
  }
}

export default GoogleLoginButton;
