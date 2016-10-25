import React from 'react';
import Nav from 'Nav';

const Main = (props) => (
  <div>
    <Nav></Nav>
    {props.children}
  </div>
);

export default Main;
