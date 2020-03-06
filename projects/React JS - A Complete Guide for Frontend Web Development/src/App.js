import React, {Component} from 'react';
import './App.css';

/* ************** */
/* DEFAULT IMPORT */
/* ************** */
// import BlogCard from './BlogCard';
import BlogItem from './BlogCard'; /* CAN USE ANY NAME */

/* ************** */
/* NAMED IMPORT */
/* ************** */
import {isArrayEmpty} from './Utils';
// import {isArrayEmpty as checkIfArrayEmpty} from './Utils'; 
// import {checkIfArrayEmpty} from './Utils'; /* CAN'T USE ANY DIFFERENT NAME */

class App extends Component {
  blogArr = [
    {
      id: 1, 
      title: 'Heading 1',
      desc: 'description'
    },
    {
      id: 2, 
      title: 'Heading 2',
      desc: 'description'
    },
    {
      id: 3, 
      title: 'Heading 3',
      desc: 'description'
    }
  ]

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {
    // console.log(item, pos);

    return (
      <BlogItem key={pos} title={item.title} desc={item.desc} />
    )
  });

  render() {
    return (
      <div className="App">
        {this.blogCards}
      </div>  
    );
  }
}

export default App;
