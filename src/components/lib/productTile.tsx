import * as React from "react";
import { useHistory } from "react-router";
import { Grid, Typography } from "@material-ui/core";

import { IProduct } from "../../types";
import Classes from "../../styles";
import { convertToCurrency } from "../../utils";

interface IProps {
    product: IProduct;
    idx: number;
}

function ProductTile({ product, idx }: IProps) {
    const classes = Classes();

    function goToProduct() {
        const history = useHistory();
        history.push(`/${product.id}`);
    }

    return (
        <Grid
            style={{
                display: "flex",
                flexDirection: "column",
                padding: 0,
                textAlign: "left",
                maxWidth: 300,
                margin: "auto",
                cursor: "pointer",
            }}
            key={idx}
            onClick={goToProduct}
        >
            <div style={{ flex: 1 }}>
                <img
                    src={product.img}
                    alt="Product image"
                    style={{ height: 350, width: 300 }}
                />
            </div>
            <div>
                <Typography className={classes.basketProductTitle} variant="h6">
                    {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <div style={{ display: "flex" }}>
                    <Typography style={{ margin: "auto 0" }}>
                        {convertToCurrency(product.price)}
                    </Typography>
                </div>
            </div>
        </Grid>
    );
}

export default ProductTile;
