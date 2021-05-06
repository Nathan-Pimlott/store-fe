import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Button,
    InputBase,
    TextField,
    Input,
} from "@material-ui/core";
import {
    AccountCircle,
    Search,
    ShoppingBasket,
} from "@material-ui/icons";

import AuthStore from "../../stores/auth";
import BasketStore from "../../stores/basket";
import Classes from "../../styles";

const Logo = require("../../assets/shenron.png");

export default () => {
    const [
        anchorEl,
        setAnchorEl,
    ] = React.useState<null | HTMLElement>(null);
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
                    {/* <img src={Logo} className={classes.headerIcon} /> */}

                    <Typography
                        variant="h6"
                        style={{ color: "white" }}
                    >
                        My Store
                    </Typography>

                    <Button className={classes.headerFirstButton}>
                        Mens
                    </Button>

                    <Button className={classes.headerLastButton}>
                        Womens
                    </Button>

                    <div className={classes.headerSearchContainer}>
                        <Input
                            className={classes.headerSearchField}
                            placeholder="Search..."
                        />
                        <IconButton
                            className={classes.headerSearchIcon}
                            onClick={() => console.log("Hello world")}
                        >
                            <Search style={{ color: "black" }} />
                        </IconButton>
                    </div>

                    <IconButton
                        aria-label="Basket"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        href="/#/basket"
                        className={classes.headerIcon}
                    >
                        <Badge
                            badgeContent={
                                basketStore.basket?.length || 0
                            }
                            color="secondary"
                        >
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>

                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
