import { observer } from "mobx-react-lite";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import ProductTile from "../lib/productTile";
import { IProduct } from "../../types";
import Header from "./header";
import Filters from "./filters";
import ViewMore from "./viewMore";

interface IParams {
    page?: string;
}

const MensIndex = () => {
    const productStore = React.useContext(ProductStore);
    const params = useParams<IParams>();

    const classes = Classes();

    const [state, setState] = React.useState({
        page: 1,
        size: "",
        color: "",
    });

    React.useEffect(() => {
        productStore.getProducts({
            gender: "mens",
            page: state.page,
        });
    }, []);

    async function setPage(value: number) {
        setState({ ...state, page: value });
        return getProducts();
    }

    function getProducts() {
        productStore.getProducts({
            gender: "mens",
            page: state.page,
            size: state.size,
            color: state.color,
        });
    }

    if (productStore.loading) {
        return <Loading />;
    }
    return (
        <div>
            <Header />
            <Filters state={state} setState={setState} />
            <Grid container className={classes.productOverviewOuterContainer}>
                {productStore.products?.map((product: IProduct, idx) => (
                    <Grid
                        className={classes.productTileInnerContainer}
                        key={idx}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <ProductTile product={product} idx={idx} />
                    </Grid>
                ))}
            </Grid>
            <ViewMore page={state.page} setPage={setPage} />
        </div>
    );
};

export default observer(MensIndex);
