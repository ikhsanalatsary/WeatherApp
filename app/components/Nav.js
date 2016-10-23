import React from 'react';
import LinkContainer from 'LinkContainer';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/">Weather App</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <LinkContainer to="/" onlyActiveOnIndex>Get Weather</LinkContainer>
              <LinkContainer to="/about">About</LinkContainer>
              <LinkContainer to="/examples">Examples</LinkContainer>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
