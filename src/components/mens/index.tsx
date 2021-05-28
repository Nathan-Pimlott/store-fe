import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Grid } from "@material-ui/core";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import ProductTile from "../lib/productTile";
import { IProduct } from "../../types";
import Header from "./header";
import Filters from "./filters";

const MensIndex = () => {
    const productStore = React.useContext(ProductStore);

    const classes = Classes();

    const [state, setState] = React.useState({
        size: [],
        color: [],
    });

    React.useEffect(() => {
        productStore.getProducts({
            gender: "mens",
        });
    }, []);

    if (productStore.loading) {
        return <Loading />;
    }
    return (
        <div>
            <Header />
            <Filters state={state} setState={setState} />
            <Grid container className={classes.productTileOuterContainer}>
                {productStore.products?.map((product: IProduct, idx) => (
                    <Grid
                        className={classes.productTileInnerContainer}
                        key={idx}
                        item
                        xs
                    >
                        <ProductTile product={product} idx={idx} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default observer(MensIndex);
