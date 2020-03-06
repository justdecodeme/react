import React from 'react';
// import {dumpLogs} from './Utils';
// import './BlogCard.css';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    /* props.key is not mart of props object, it is used my react internaly */
    // dumpLogs(props);
    
    return (
        <div className={classes.BlogCard}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default BlogCard;