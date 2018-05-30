import React, { Component } from 'react';

// react functinal component
const Intro = (props) => (
  <p className="App-intro">
    {props.message}
  </p>
);

export default Intro;
