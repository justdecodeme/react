import React from 'react';
import './App.css';
import BlogCard from './BlogCard';

function App() {
  const blogArr = [
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

  const blogCards = blogArr.map((item, pos) => {
    console.log(item, pos);

    return (
      <BlogCard key={pos} title={item.title} desc={item.desc}></BlogCard>
    )
  });

  return (
    <div className="App">
      {blogCards}
    </div>  
  );
}

export default App;
