import React from 'react';
import {dumpLogs} from './Utils';

const BlogCard = (props) => {
    /* props.key is not mart of props object, it is used my react internaly */
    dumpLogs(props);
    
    return (
        <div className="BlogCard">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default BlogCard;