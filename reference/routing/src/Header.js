import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        {/* <a href="/">Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About Us</a> */}
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {/* <a href="/team">Team</a> */}
                        <Link
                            to={{
                                pathname: "/team",
                                hash: "#id",
                                search: "?id=1",
                            }}
                        >
                            Team
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
