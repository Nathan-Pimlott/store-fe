import { observer } from "mobx-react-lite";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { decode, encode } from "querystring";

import ProductStore from "../../stores/product";
import Classes from "../../styles";
import Loading from "../core/loading";
import ProductTile from "../lib/productTile";
import { IFilterProducts, IGender, IProduct } from "../../types";
import Header from "./header";
import Filters from "./filters";
import ViewMore from "./viewMore";

interface IFilters {
    gender: IGender;
    page: number;
    size: string;
    color: string;
}

const MensIndex = () => {
    const productStore = React.useContext(ProductStore);
    const history = useHistory();
    const qsData = decode(useLocation().search.replace("?", ""));
    const classes = Classes();

    const filters: IFilters = {
        gender: "mens",
        page: qsData.page ? parseInt(qsData.page as string) : 1,
        size: (qsData.page as string) || "",
        color: (qsData.color as string) || "",
    };

    React.useEffect(() => {
        productStore.getProducts(filters);
    }, []);

    async function setQsData(propName: string, value: number | string) {
        const updatedFilters: any = {
            ...qsData,
            gender: "mens",
            [propName]: value,
        };
        history.push({
            pathname: "",
            search: encode(updatedFilters),
        });
        productStore.getProducts(updatedFilters);
    }

    function goToProduct(productId: string) {
        history.push(`product/${productId}`);
    }

    if (productStore.loading) {
        return <Loading />;
    }

    return (
        <div>
            <Header />
            <Filters filters={qsData} setFilters={setQsData} />
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
                        <ProductTile
                            product={product}
                            goToProduct={goToProduct}
                            idx={idx}
                        />
                    </Grid>
                ))}
            </Grid>
            <ViewMore page={filters.page} setPage={setQsData} />
        </div>
    );
};

export default observer(MensIndex);
