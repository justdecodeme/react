import React from "react";
import { withRouter } from "react-router-dom";

class Member extends React.Component {
    componentDidMount() {
        console.log(this.props); // to receive route props
    }

    render() {
        return <div>Member</div>;
    }
}

export default withRouter(Member);
