import React from "react";
import { withRouter, Link } from "react-router-dom";

class Member extends React.Component {
    componentDidMount() {
        // console.log(this.props); // to receive route props
    }

    render() {
        return (
            <div>
                <h2>Member</h2>
                <Link
                    to={{
                        /* relative path (to append to current path) -> http://localhost:3000/team/social */
                        pathname: this.props.match.url + "/social",
                        /* -> http://localhost:3000/social */
                        // pathname: "/social",
                    }}
                >
                    Social Account
                </Link>
            </div>
        );
    }
}

export default withRouter(Member);
