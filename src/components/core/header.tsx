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
import { withRouter } from "react-router";

const Logo = require("../../assets/shenron.png");

interface IProps {
    history: any;
}

export default withRouter(({ history }: IProps) => {
    const authStore = React.useContext(AuthStore);
    const basketStore = React.useContext(BasketStore);

    const [state, setState] = React.useState({
        searchField: "",
    });

    useEffect(() => {
        basketStore.getBasket();
    }, []);

    async function search() {
        try {
            history.push(`/search/${state.searchField}`);
        } catch (error) {
            throw Error(error);
        }
    }

    const classes = Classes();

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

                    <Button
                        className={classes.headerFirstButton}
                        href="/#/mens"
                    >
                        Mens
                    </Button>

                    <Button
                        className={classes.headerLastButton}
                        href="/#/womens"
                    >
                        Womens
                    </Button>

                    <div className={classes.headerSearchContainer}>
                        <Input
                            className={classes.headerSearchField}
                            placeholder="Search..."
                            value={state.searchField}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    searchField: e.target.value,
                                })
                            }
                        />
                        <IconButton
                            className={classes.headerSearchIcon}
                            onClick={search}
                            disabled={!state.searchField}
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

                    <IconButton
                        color="inherit"
                        onClick={authStore.logout}
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
});
