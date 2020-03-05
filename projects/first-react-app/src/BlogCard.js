import React from 'react';

const BlogCard = (props) => {
    /* props.key is not mart of props object, it is used my react internaly */
    console.log(props);
    
    return (
        <div className="BlogCard">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default BlogCard;