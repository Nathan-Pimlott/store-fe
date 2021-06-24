import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import * as React from "react";
import ProductStore from "../../stores/product";

import Classes from "../../styles";

interface IProps {
    page: number;
    setPage: (prop: "page", value: number) => void;
}

function MensFilters({ page, setPage }: IProps) {
    const classes = Classes();
    const productStore = React.useContext(ProductStore);

    const productsPerPage = parseInt(process.env.PRODUCTS_PER_PAGE);

    // If the page is not filled, show the number of products on the page
    const viewing =
        page * productsPerPage > productStore.productCount
            ? page * productsPerPage
            : productStore.productCount;

    const numberOfPages = Math.ceil(
        productStore.productCount / productsPerPage
    );

    return (
        <div style={{ padding: 20, display: "flex", flexDirection: "column" }}>
            <Pagination
                style={{ margin: "10px auto 0 auto" }}
                count={numberOfPages}
                page={page}
                onChange={(_, v) => setPage("page", v)}
            />
        </div>
    );
}

export default MensFilters;
