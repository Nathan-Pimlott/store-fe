import { IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import * as React from "react";
import classnames from "classnames";
import { times } from "lodash";

import { IProduct } from "../../types";
import Classes from "../../styles";
import BasketStore from "../../stores/basket";
import { convertToCurrency } from "../../utils";
import { Quantity } from "../lib";

interface IProps {
    product: IProduct;
    idx: number;
}

const InlineProduct = ({ product, idx }: IProps) => {
    const classes = Classes();

    const basketStore = React.useContext(BasketStore);

    function removeProduct() {
        basketStore.removeFromBasket(product.id);
    }

    function updateQuantity(value: number) {
        basketStore.updateQuantity(product.id, value);
    }

    return (
        <div
            className={classnames(
                classes.productContainer,
                idx > 0 && classes.productBorder
            )}
        >
            <div>
                <img
                    src={product.img}
                    alt="Product image"
                    className={classes.basketProductImage}
                />
            </div>
            <div className={classes.basketProductDetails}>
                <Typography className={classes.basketProductTitle} variant="h6">
                    {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <div style={{ display: "flex" }}>
                    <Typography style={{ margin: "auto 0" }}>
                        {convertToCurrency(product.price)}
                    </Typography>
                    <Quantity
                        classes={classes}
                        value={product.quantity}
                        onChange={updateQuantity}
                    />
                </div>
            </div>
            <div className={classes.basketRemoveProductContainer}>
                <IconButton
                    aria-label="delete"
                    className={classes.basketRemoveProductButton}
                    onClick={removeProduct}
                >
                    <Delete className={classes.basketRemoveProductIcon} />
                </IconButton>
            </div>
        </div>
    );
};

export default InlineProduct;
