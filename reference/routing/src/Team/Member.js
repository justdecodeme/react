import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./Member.css";

class Member extends React.Component {
    componentDidMount() {
        // console.log(this.props); // to receive route props
    }

    render() {
        return (
            <div className="member">
                <h2>Name: {this.props.name}</h2>
                <h3>Date of joining: {this.props.doj}</h3>
                <Link
                    to={{
                        /* relative path (to append to current path) -> http://localhost:3000/team/social */
                        pathname:
                            this.props.match.url +
                            "/member/details/" +
                            this.props.id,
                        /* -> http://localhost:3000/social */
                        // pathname: "/social",
                    }}
                >
                    Details
                </Link>
                {" | "}
                <Link
                    to={{
                        pathname:
                            this.props.match.url + "/member/details/social",
                    }}
                >
                    Social
                </Link>
            </div>
        );
    }
}

export default withRouter(Member);
