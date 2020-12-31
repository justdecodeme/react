import React from "react";
import { Link, useLocation } from "react-router-dom";

function NoMatch() {
	const location = useLocation();

	return (
		<div>
			<p>
				URL not found: <b>{location.pathname}</b>
			</p>
			<p>
				<strong>Note: </strong>This page will come for any route which is note
				defined.
			</p>
			<Link to="/">Back to Home</Link>
		</div>
	);
}

export default NoMatch;
