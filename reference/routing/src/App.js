import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Team from "./Team/Team";
import Details from "./Team/Details";
import Social from "./Team/Social";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <hr />
                {/* <Route path="/" exact render={() => <Home />} /> */}
                <Route path="/" exact component={Home} />{" "}
                <Route path="/about" exact component={About} />
                <Route path="/team" exact component={Team} />
                <Redirect from="/redirect" to="/about" />
                <Switch>
                    <Route
                        path="/team/member/details/social"
                        component={Social}
                    />
                    <Route
                        path="/team/member/details/:id"
                        exact
                        component={Details}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
