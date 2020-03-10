import React, { Component } from 'react';
import './Nav.scss'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { langSelectorIsOpen: false };
  }

  render() {
    return (
      <div className="header-container">
        <header className="wrapper clearfix">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="" alt=""/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Lorem</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }

  toggleLangSelector() {
    if (this.state.langSelectorIsOpen) {
      this.setState({ langSelectorIsOpen: false })
    } else {
      this.setState({ langSelectorIsOpen: true })
    }
  }
}

export default Nav;
