import { observer } from "mobx-react-lite";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { decode, encode } from "querystring";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import Header from "./header";

const ProductIndex = () => {
    const productStore = React.useContext(ProductStore);
    const { productId }: any = useParams();
    const classes = Classes();

    React.useEffect(() => {
        productStore.getProduct(productId);
    }, []);

    if (productStore.loading) {
        return <Loading />;
    }

    return (
        <div>
            <Header productName={productStore.product?.name || "test..."} />
            <div>{productStore.product?.name || "test..."}</div>
        </div>
    );
};

export default observer(ProductIndex);
