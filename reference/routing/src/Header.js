import React from "react";

import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/team">Team</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
