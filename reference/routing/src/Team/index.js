import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

import Member from "./Member";

const team = [
	{
		id: 1,
		name: "Jan",
		DOJ: "11/03/2017",
	},
	{
		id: 2,
		name: "Ana",
		DOJ: "23/07/2016",
	},
	{
		id: 3,
		name: "Tom",
		DOJ: "05/12/2013",
	},
];

export default function Team() {
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	return (
		<div>
			<h1>Team</h1>
			<ul>
				{team.map((member) => {
					return (
						<li>
							<NavLink to={`${url}/${member.id}`}>{member.name}</NavLink>
						</li>
					);
				})}
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>Please select a team member.</h3>
				</Route>
				<Route path={`${path}/:memberId`}>
					<Member />
				</Route>
			</Switch>
		</div>
	);
}
