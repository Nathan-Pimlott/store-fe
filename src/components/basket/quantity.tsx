import * as React from "react";
import { Select, MenuItem, Typography } from "@material-ui/core";
import { times } from "lodash";

interface IProps {
    classes: any;
    onChange: any;
    value: number;
}

export const Quantity = (props: IProps) => (
    <div style={{ display: "flex", marginLeft: 30 }}>
        <Typography
            style={{ margin: "auto 0" }}
            id="basket-product-quantity-label"
        >
            Qty
        </Typography>
        <Select
            value={props.value}
            onChange={(e: any) => props.onChange(e.target.value)}
            style={{ marginLeft: 10 }}
            id="basket-product-quantity"
        >
            {times(10, (i: number) => (
                <MenuItem
                    key={i}
                    value={i + 1}
                    id={`basket-product-quantity-${i}`}
                >
                    {i + 1}
                </MenuItem>
            ))}
        </Select>
    </div>
);
