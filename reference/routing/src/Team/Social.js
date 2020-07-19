import React from "react";
import { Route } from "react-router-dom";

import NestedInfo from "./NestedInfo";

class Social extends React.Component {
    render() {
        return (
            <div>
                <h3>Social account</h3>
                <Route
                    path={this.props.match.url + "/:id"}
                    component={NestedInfo}
                />
            </div>
        );
    }
}

export default Social;
