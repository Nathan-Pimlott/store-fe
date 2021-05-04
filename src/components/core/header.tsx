import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
} from "@material-ui/core";
import {
    AccountCircle,
    ShoppingBasket,
} from "@material-ui/icons";

import AuthStore from "../../stores/auth";
import BasketStore from "../../stores/basket";
import Classes from "../../styles";

const Logo = require("../../assets/shenron.png");

export default () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const authStore = React.useContext(AuthStore);
    const basketStore = React.useContext(BasketStore);

    useEffect(() => {
        basketStore.getBasket();
    }, []);

    const classes = Classes();

    console.log("Basket Store: ", basketStore.basket);

    return (
        <div className={classes.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <img src={Logo} className={classes.headerIcon} />

                    <IconButton
                        aria-label="Basket"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        href="/#/basket"
                        className={classes.headerIcon}
                    >
                        <Badge
                            badgeContent={basketStore.basket?.length || 0}
                            color="secondary"
                        >
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>

                    <IconButton
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
