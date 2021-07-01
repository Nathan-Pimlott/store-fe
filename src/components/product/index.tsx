import * as React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import ProductStore from "../../stores/product";
import BasketStore from "../../stores/basket";
import Classes from "../../styles";
import Loading from "../core/loading";
import Header from "./header";
import ProductImage from "./image";
import ProductDetails from "./details";

const ProductIndex = () => {
    const productStore = React.useContext(ProductStore);
    const basketStore = React.useContext(BasketStore);
    const { productId }: any = useParams();
    const classes = Classes();

    const [state, setState] = React.useState({
        size: "",
    });

    React.useEffect(() => {
        productStore.getProduct(productId);
    }, []);

    if (productStore.loading || !productStore?.product?.id) {
        return <Loading />;
    }

    const { product } = productStore;

    async function addToBasket() {
        await basketStore.addToBasket(product);
    }

    return (
        <div>
            <Header productName={product.name} />
            <div style={{ display: "flex", padding: 20 }}>
                <ProductImage classes={classes} imgSrc={product.img} />
                <ProductDetails
                    product={product}
                    loading={basketStore.loading}
                    classes={classes}
                    state={state}
                    setState={setState}
                    addToBasket={addToBasket}
                />
            </div>
        </div>
    );
};

export default observer(ProductIndex);
