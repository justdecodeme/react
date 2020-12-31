import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

const Team = React.lazy(() => import("./Team")); // Lazy loading "Team" component

export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				{/* <Route path="/" exact render={() => <Home />} /> */}
				<Route path="/" exact component={Home} />{" "}
				<Route path="/about" exact component={About} />
				<Redirect from="/old-about" to="/about" />
				<Route
					path="/team"
					render={() => (
						<Suspense fallback={<div>Loading...</div>}>
							<Team />
						</Suspense>
					)}
				/>
				<Route path="*" component={NoMatch} />
			</Switch>
		);
	}
}
