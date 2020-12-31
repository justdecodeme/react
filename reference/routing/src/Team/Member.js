import React from "react";
import { withRouter } from "react-router-dom";

import "./Member.css";

class Member extends React.Component {
	componentDidMount() {
		// console.log(this.props); // to receive route props
	}

	render() {
		console.log(this.props);
		return (
			<div className="member">
				<h1>Id: {this.props.match.params.memberId}</h1>
				{/* <h2>Name: {this.props.name}</h2>
				<h3>Date of joining: {this.props.doj}</h3> */}
			</div>
		);
	}
}

export default withRouter(Member);
