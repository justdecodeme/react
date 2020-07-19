import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

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
                        {/* <a href="/about">About Us</a> */}
                        {/* <Link to="/about">About</Link> */}
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        {/* <a href="/team">Team</a> */}
                        {/* <Link
                            to={{
                                pathname: "/team",
                                hash: "#india",
                                search: "?region=bengalore",
                            }}
                        >
                            Team
                        </Link> */}
                        <NavLink
                            to={{
                                pathname: "/team",
                                hash: "#india",
                                search: "?region=bengalore",
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
                </ul>
            </nav>
        );
    }
}

export default Header;
