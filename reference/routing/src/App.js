import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Details from "./Team/Details";
import Social from "./Team/Social";

const Team = React.lazy(() => import("./Team/Team")); // Lazy loading "Team" component

class App extends React.Component {
    render() {
        return (
            // <BrowserRouter basename="/my-app">
            <BrowserRouter>
                <Header />
                <hr />
                {/* <Route path="/" exact render={() => <Home />} /> */}
                {/* <Redirect from="/redirect" to="/about" /> */}
                <Route path="/" exact component={Home} />{" "}
                <Route path="/about" exact component={About} />
                <Route
                    path="/team"
                    exact
                    render={() => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Team />
                        </Suspense>
                    )}
                />
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
                {/* Not working as expected */}
                {/* <Route render={() => <h1>Not Found</h1>} /> */}
            </BrowserRouter>
        );
    }
}

export default App;
