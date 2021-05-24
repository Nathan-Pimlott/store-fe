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
import { AccountCircle, Search, ShoppingBasket } from "@material-ui/icons";

import AuthStore from "../../stores/auth";
import BasketStore from "../../stores/basket";
import Classes from "../../styles";
import { withRouter } from "react-router";
import { observer } from "mobx-react-lite";

const Logo = require("../../assets/shenron.png");

interface IProps {
    history: any;
}

const Header = ({ history }: IProps) => {
    const authStore = React.useContext(AuthStore);
    const basketStore = React.useContext(BasketStore);

    const classes = Classes();

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

    const basketCount =
        basketStore.basket?.length > 0
            ? basketStore.basket
                  ?.map((item) => item.quantity)
                  .reduce((current, next) => current + next)
            : 0;

    return (
        <div className={classes.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ color: "white" }}>
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
                        <Badge badgeContent={basketCount} color="secondary">
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>

                    <IconButton color="inherit" onClick={authStore.logout}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(observer(Header));
