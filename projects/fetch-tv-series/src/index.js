import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }
// create react element
// const greeting = React.createElement('h1', {}, 'Hello World!');
// create react element using jsx syntax
// const greeting = (<h1>Today is: {getCurrentDate()}.</h1>);
// ReactDOM.render(greeting, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
