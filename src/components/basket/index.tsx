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
            <button
                onClick={() => {
                    basketStore.addToBasket({
                        id: "home_shirt_1",
                        name: "Liverpool Home Shirt",
                        description: "Liverpool mens home shirt 2020/21",
                        img: homeImg,
                        gender: "mens",
                        price: 64.99,
                        color: "red",
                    });
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    basketStore.addToBasket({
                        id: "away_shirt_1",
                        name: "Liverpool Away Shirt",
                        description: "Liverpool mens away shirt 2020/21",
                        img: awayImg,
                        gender: "mens",
                        price: 54.99,
                        color: "white",
                    });
                }}
            >
                Away
            </button>

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

const homeImg =
    "https://images.sportsdirect.com/images/products/37700408_l.jpg";
const awayImg =
    "https://media.e-subsidesports.com/sites/us/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/1/0/1000__livass2021_joe_a.jpg";
