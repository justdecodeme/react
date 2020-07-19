import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/page-1">PageOne</a>
                    </li>
                    <li>
                        <a href="/page-2">PageTwo</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
