import React from "react";
import { withRouter } from "react-router-dom";

class Details extends React.Component {
    componentDidMount() {
        console.log(this.props); // to receive route props
    }

    render() {
        return (
            <div>
                <h3>Details account of member</h3>
            </div>
        );
    }
}

export default withRouter(Details);
