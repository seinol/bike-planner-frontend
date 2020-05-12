import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// eslint-disable-next-line import/no-duplicates
import GoogleLogin from 'react-google-login';
// eslint-disable-next-line import/no-duplicates
import GoogleLogout from 'react-google-login';
import Box from '@material-ui/core/Box';

const CLIENT_ID = '1099018549105-d14q96lthqjqrt4h5s48c53ov8tqegc2.apps.googleusercontent.com';

class LoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenId: window.localStorage.getItem('tokenId'),
      redirect: null,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.tokenId) {
      this.setState(() => ({
        tokenId: response.tokenId,
      }));
      window.localStorage.setItem('tokenId', response.tokenId);
      window.localStorage.setItem('firstName', response.profileObj.givenName);
      window.localStorage.setItem('lastName', response.profileObj.familyName);
      window.localStorage.setItem('email', response.profileObj.email);
      this.setState({ redirect: '/' });
    }
  }

  logout() {
    this.setState(() => ({
      tokenId: '',
    }));
    window.localStorage.removeItem('tokenId');
    window.localStorage.removeItem('firstName');
    window.localStorage.removeItem('lastName');
    window.localStorage.removeItem('email');
    this.setState({ redirect: '/' });
  }

  handleLoginFailure(response) {
    console.log('Failed to login');
    console.log(response);
  }

  handleLogoutFailure(response) {
    console.log('Failed to logout');
    console.log(response);
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />;
    return (
      <Box mt={2}>
        {
          this.state.tokenId !== null
            ? (
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Ausloggen von Google"
                onSuccess={this.logout}
                onFailure={this.handleLogoutFailure}
              />
            )
            : (
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Einloggen mit Google"
                onSuccess={this.login}
                onFailure={this.handleLoginFailure}
                cookiePolicy="single_host_origin"
                responseType="code,token"
              />
            )
        }
      </Box>
    );
  }
}

export default LoginButton;
