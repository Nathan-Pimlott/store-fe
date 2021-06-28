import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import { observer } from "mobx-react-lite";

import AuthStore from "../stores/auth";

import Basket from "../components/basket";
import Header from "../components/core/header";
import Login from "../components/auth/login";
import Mens from "../components/mens";
import Product from "../components/product";
import Register from "../components/auth/register";
import Womens from "../components/womens";

const Routes = () => {
    const authStore = React.useContext(AuthStore);

    React.useEffect(() => {
        authStore.getIsLoggedIn();
    }, []);

    if (authStore.loading) {
        return <div />;
    }

    if (!authStore.user?.email) {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route path="/" component={Login} />
                </Switch>
            </HashRouter>
        );
    }

    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path="/mens" component={Mens} />
                <Route exact path="/womens" component={Womens} />
                <Route exact path="/product/:productId" component={Product} />
                <Route exact path="/basket" component={Basket} />
            </Switch>
        </HashRouter>
    );
};

export default observer(Routes);
