import React from "react";

import Member from "./Member";

class Team extends React.Component {
    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Team</h1>
                <Member />
            </div>
        );
    }
}

export default Team;
