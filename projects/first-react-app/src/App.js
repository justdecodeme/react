import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const blogObj = {
    title: 'Heading',
    desc: 'description'
  }

  const styles =         {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px green'
  }

  return (
    <div className="App">
      {/* Inline style */}
      <div style = {
        {
          margin: '16px',
          padding: '16px',
          boxSizing: 'border-box',
          borderRadius: '5px',
          boxShadow: '0 2px 5px red'
        }
      }>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.desc}</p>
      </div>

      <hr></hr>

      {/* Internal style */}
      <div style = {styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.desc}</p>
      </div>

      <hr></hr>

      {/* External style */}
      <div className="BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.desc}</p>
      </div>
    </div>  
  );
}

export default App;
