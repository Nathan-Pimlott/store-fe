import * as React from "react";
import {
    Typography,
    Select,
    MenuItem,
    InputLabel,
    Button,
} from "@material-ui/core";

import { IProduct } from "../../types";
import { convertToCurrency } from "../../utils";

const sizes = [
    { value: "xs", label: "Extra Small" },
    { value: "s", label: "Small" },
    { value: "m", label: "Medium" },
    { value: "l", label: "Large" },
    { value: "xl", label: "Extra Large" },
];

interface IProductDetailsProps {
    product: IProduct;
    loading: boolean;
    classes: any;
    state: any;
    setState: any;
    addToBasket: () => void;
}

const ProductDetails = ({
    product,
    loading,
    classes,
    state,
    setState,
    addToBasket,
}: IProductDetailsProps) => {
    return (
        <div style={{ flex: 1, padding: 20 }}>
            <div style={{ backgroundColor: "white", padding: 20 }}>
                <Typography variant="h4">{product.name}</Typography>

                <Typography style={{ marginTop: 20 }} id="product-description">
                    {product.description}
                </Typography>

                <Typography style={{ fontWeight: "bold" }} id="product-price">
                    {convertToCurrency(product.price)}
                </Typography>

                <InputLabel
                    id={`${product.name}-size`}
                    style={{ marginTop: 20 }}
                >
                    Size
                </InputLabel>

                <Select
                    labelId="product-size"
                    id={`product-size`}
                    style={{ minWidth: 250, maxWidth: 300 }}
                    inputProps={{
                        name: "product-size",
                    }}
                    value={state.size}
                    onChange={(e) =>
                        setState({
                            ...state,
                            size: e.target.value as string,
                        })
                    }
                >
                    {sizes.map((size, idx) => (
                        <MenuItem
                            value={size.value}
                            key={idx}
                            id={`product-size-${size.value}`}
                        >
                            {size.label}
                        </MenuItem>
                    ))}
                </Select>

                <Typography style={{ marginTop: 20 }} id="product-color">
                    Colour: {product.color}
                </Typography>

                <Button
                    id="product-add-to-basket"
                    type="submit"
                    disabled={loading}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 20 }}
                    onClick={addToBasket}
                >
                    Add to basket
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;
