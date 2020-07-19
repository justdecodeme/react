import React from "react";

class NestedInfo extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h3>NestedInfo: </h3>
                <p>Id: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default NestedInfo;
