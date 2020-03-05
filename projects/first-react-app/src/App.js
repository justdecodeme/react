import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    React.createElement(
      "div",
      {
        className: "App"
      },
      React.createElement("h2", null, "JSX behind the scene!"),
      React.createElement(
        "div",
        {
          className: "blog-card"
        },
        React.createElement("h1", null, "Heading"),
        React.createElement("p", null, "Content")
      )
    )    
  );
}

export default App;
