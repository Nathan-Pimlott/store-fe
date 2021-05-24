import { Button, Card, Typography } from "@material-ui/core";
import { PlusOne } from "@material-ui/icons";
import * as React from "react";
import classnames from "classnames";

import { IProduct } from "../../types";
import Classes from "../../styles";
import BasketStore from "../../stores/basket";
import { convertToCurrency } from "../../utils";
import { Quantity } from "../lib";

interface IProps {
    product: IProduct;
    idx: number;
}

const ProductTile = ({ product, idx }: IProps) => {
    const classes = Classes();

    const basketStore = React.useContext(BasketStore);

    function addToBasket() {
        basketStore.addToBasket(product);
    }

    return (
        <Card
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px 0 20px",
                textAlign: "center",
            }}
            key={idx}
        >
            <div style={{ flex: 1 }}>
                <img
                    src={product.img}
                    alt="Product image"
                    style={{ height: 200, width: "auto" }}
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
            <div className={classes.basketRemoveProductContainer}>
                <Button
                    aria-label="delete"
                    // className={classes.basketRemoveProductButton}
                    onClick={addToBasket}
                    fullWidth
                    color="secondary"
                >
                    <PlusOne />
                </Button>
            </div>
        </Card>
    );
};

export default ProductTile;
