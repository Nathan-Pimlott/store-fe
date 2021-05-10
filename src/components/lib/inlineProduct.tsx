import { IconButton, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import * as React from "react";
import classnames from "classnames";

import { IProduct } from "../../types";
import Classes from "../../styles";
import BasketStore from "../../stores/basket";

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
                <Typography
                    className={classes.basketProductTitle}
                    variant="h6"
                >
                    {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.price}</Typography>
            </div>
            <div className={classes.basketRemoveProductContainer}>
                <IconButton
                    aria-label="delete"
                    className={classes.basketRemoveProductButton}
                    onClick={removeProduct}
                >
                    <Delete
                        className={classes.basketRemoveProductIcon}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default InlineProduct;
