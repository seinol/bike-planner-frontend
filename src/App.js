import React, { Component } from 'react';
import './App.scss';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer"

class App extends Component {

  render() {
    return (
      <div className="App">

        <Nav />

        <div className="main-container">
          <div className="main wrapper clearfix">

            <article>
              <header>
                <h1>Hello World!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas
                  tempor.
                  Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper
                  consequat est, eu porta velit mollis nec.</p>
              </header>
            </article>

          </div>
        </div>

        <Footer />

      </div>
    );
  }

}

export default App;
