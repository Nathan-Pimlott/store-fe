import * as React from "react";
import { observer } from "mobx-react-lite";

import Classes from "../../styles";
import BasketStore from "../../stores/basket";
import BasketHeader from "./header";
import BasketProducts from "./products";
import BasketTotal from "./total";
import { Grid } from "@material-ui/core";

export default observer(() => {
    const classes = Classes();

    const basketStore = React.useContext(BasketStore);

    React.useEffect(() => {
        basketStore.getBasket();
    }, []);

    return (
        <React.Fragment>
            <BasketHeader />

            <Grid container>
                <Grid item sm={12} md={8} style={{ padding: 20 }}>
                    <BasketProducts basket={basketStore.basket} />
                </Grid>
                <Grid item sm={12} md={4} style={{ padding: 20 }}>
                    <BasketTotal basket={basketStore.basket} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
});
