import { observer } from "mobx-react-lite";
import * as React from "react";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import ProductTile from "../lib/productTile";
import { IProduct } from "../../types";
import Header from "./header";
import { Button } from "@material-ui/core";

const MensIndex = () => {
    const productStore = React.useContext(ProductStore);

    const classes = Classes();

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
            <Button onClick={() => productStore.createProduct()}>Hello</Button>
            <div className={classes.productTileOuterContainer}>
                {productStore.products?.map((product: IProduct, idx) => (
                    <div
                        className={classes.productTileInnerContainer}
                        key={idx}
                    >
                        <ProductTile product={product} idx={idx} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(MensIndex);
