import { Typography } from "@material-ui/core";
import * as React from "react";
import classnames from "classnames";

import Classes from "../../styles";

interface IProps {
    productName: string;
}

function ProductHeader({ productName }: IProps) {
    const classes = Classes();

    return (
        <Typography
            style={{ backgroundColor: "white" }}
            className={classes.basketTitleContainer}
            variant="h3"
            id="product-title"
        >
            {productName}
        </Typography>
    );
}

export default ProductHeader;
