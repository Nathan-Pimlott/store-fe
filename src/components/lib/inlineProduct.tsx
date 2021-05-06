import { Typography } from "@material-ui/core";
import * as React from "react";

import { IProduct } from "../../types";

interface IProps {
    product: IProduct;
}

const InlineProduct = ({ product }: IProps) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                borderTop: "1px solid lightgrey",
                padding: 20,
            }}
        >
            <div>
                <img
                    src={product.img}
                    alt="Product image"
                    style={{ height: 100, width: "auto" }}
                />
            </div>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 20,
                }}
            >
                <Typography
                    style={{ fontWeight: "bold", flex: 1 }}
                    variant="h6"
                >
                    {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.price}</Typography>
            </div>
            <div style={{ marginLeft: 20 }}>
                <Typography>Add a remove and quantity button :)</Typography>
            </div>
        </div>
    );
};

export default InlineProduct;
