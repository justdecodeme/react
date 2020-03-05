import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const fName = "Rakesh";
  const lName = "Kumar";
  const age = 26;

  const getFullName = () => `${fName} ${lName}`

  const inputBox = <input placeholder = {'Your Name'}/>;

  return (
    <div className="App">
      <h2>First Name: {fName}</h2>
      <h2>Last Name: {`${lName}`}</h2>
      <h2>Full Name: {getFullName()}</h2>
      <h3>You are {age < 100 ? 'young' : 'Immortal'}.</h3>

      {inputBox}
    </div>
  );
}

export default App;
