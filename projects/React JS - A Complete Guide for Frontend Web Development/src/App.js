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
  state = {
    showBlogs: true
  }

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

  showBlogs = true;

  onToggleBtnClick = () => {
    // this.setState({
    //   showBlogs: !this.state.showBlogs
    // })

    this.setState((prevState, prevProps) => {
      return {
        showBlogs: !prevState.showBlogs /* return always updated value */
      }
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onToggleBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <hr/>
        {this.state.showBlogs ? this.blogCards : null}
      </div>  
    );
  }
}

export default App;
