import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

class Header extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						{/* <a href="/">Home</a> */}
						{/* <Link to="/">Home</Link> */}
						<NavLink to="/" exact>
							Home
						</NavLink>
					</li>
					<li>
						{/* <a href="/about">About</a> */}
						{/* <Link to="/about">About</Link> */}
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						{/* <a href="/team">Team</a> */}
						{/* <Link
                            to={{
                                pathname: "/team",
                                search: "?region=bengalore",
                                hash: "#india",
                            }}
                        >
                            Team
                        </Link> */}
						<NavLink
							to={{
								pathname: "/team",
								search: "?region=bengalore",
								hash: "#india",
							}}
							activeClassName="my-active"
							activeStyle={{
								color: "blue",
								fontWeight: "bold",
							}}
						>
							Team
						</NavLink>
					</li>
					<li>
						<NavLink to="/old-about">Old About (redirect to About)</NavLink>
					</li>
					<li>
						<NavLink to="/will-not-match">Will Not Match</NavLink>
					</li>
					<li>
						<NavLink to="/also/will/not/match">Also Will Not Match</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
