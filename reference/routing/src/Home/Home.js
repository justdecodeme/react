import React from "react";

class Home extends React.Component {
    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button
                    onClick={() => {
                        // this.props.history.push({ pathname: "/about" });
                        this.props.history.push("/about");
                    }}
                >
                    About
                </button>
            </div>
        );
    }
}

export default Home;
