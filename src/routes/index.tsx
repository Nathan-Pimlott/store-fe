import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Auth from '../components/auth';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <div>TEst page</div>
                </Route>
                <Route path="/">
                    <Auth />
                </Route>
            </Switch>
        </Router>
    );
}