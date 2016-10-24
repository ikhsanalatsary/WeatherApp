import React from 'react';
import Nav from 'Nav';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
