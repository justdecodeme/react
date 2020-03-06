import React from 'react';
import {dumpLogs} from './Utils';
// import './BlogCard.css';
import classes from './BlogCard.module.css';

class BlogCard extends React.Component {
    state = {
        likeCount: 0
    }

    onLikeBtnClick = () => {
        this.setState((prevState, prevProps) => {
            return {
                likeCount: prevState.likeCount + 1
            }
        })
    }

    render() {
        dumpLogs(this.props);

        return (
            <div className={classes.BlogCard}>
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <br/>
                <p>Like Count: {this.state.likeCount}</p>
                <br/>
                <button onClick={this.onLikeBtnClick}>Like</button>
            </div>
        )
    }
}

export default BlogCard;