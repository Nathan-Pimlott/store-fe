import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import { observer } from 'mobx-react-lite';

import Login from '../components/auth/login';
import Register from '../components/auth/register';
import AuthStore from '../stores/auth';
import Header from '../components/core/header';
import Home from '../components/home';
import Basket from '../components/basket';
import Mens from '../components/mens';
import Banner from '../components/core/banner';

const Routes = () => {
    const authStore = React.useContext(AuthStore);

    React.useEffect(() => {
        authStore.getIsLoggedIn();
    }, [])

    if (authStore.loading) {
        return <div />
    }

    if (!authStore.user?.email) {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route path="/" component={Login} />
                </Switch>
                <Banner />
            </HashRouter>
        )
    }

    console.log('Is logged in: ', authStore.user);
    
    
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path="/mens" component={Mens} />
                <Route exact path="/basket" component={Basket} />
                <Route path="/" component={Home} />
            </Switch>
            <Banner />
        </HashRouter>
    );
}

export default observer(Routes);