import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Team from "./Team/Team";
import Details from "./Team/Details";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <hr />

                {/* <Route path="/" exact render={() => <Home />} />
                <Route path="/about" exact render={() => <About />} />
                <Route path="/team" exact render={() => <Team />} /> */}

                {/* Both are same */}

                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/team" exact component={Team} />
                <Route
                    path="/team/member/details/:id"
                    exact
                    component={Details}
                />
            </BrowserRouter>
        );
    }
}

export default App;
