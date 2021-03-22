import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { Typography } from "@material-ui/core";

import Auth from '../components/auth';
import AuthStore from '../stores/auth';
import Header from '../core/header';

const Routes = () => {
    const authStore = React.useContext(AuthStore);
    console.log('Auth Store: ', authStore);

    React.useEffect(() => {
        authStore.getIsLoggedIn();
    }, [])

    if (authStore.loading) {
        return <div />
    }

    return (
        <Router>
            {
                authStore.user?.email ?
                    <Switch>
                        <Header />
                        <Route exact path="/home">
                            <div>TEst page</div>
                        </Route>
                        <Route path="/">
                            <Typography variant='h1'>You're Logged In!</Typography>
                        </Route>
                    </Switch> :
                    <Auth />
            }
        </Router>
    );
}

export default observer(Routes);