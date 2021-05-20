import { observer } from "mobx-react-lite";
import * as React from "react";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import ProductTile from "../product/tile";
import { IProduct } from "../../types";
import Header from "./header";

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
            <div className={classes.productTileOuterContainer}>
                {productStore.products?.map((product: IProduct) => (
                    <div className={classes.productTileInnerContainer}>
                        <ProductTile product={product} classes={classes} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(MensIndex);
