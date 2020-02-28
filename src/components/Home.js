import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import Default from "./Default";
import SearchAPI from "./SearchAPI";
import "./Home.css";

function Home() {

    const history = useHistory();
    const routeToHome = () => {
        history.push("/");
    }

    return (
        <Router>
            <div className="App">
                <nav>
                    <h2>Welcome to the ultimate fan site!</h2>
                    <div className="nav-links">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/searchAPI" className="link">Search API</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/searchAPI">
                        <SearchAPI />
                    </Route>
                    <Route path="/">
                        <Default />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Home;
