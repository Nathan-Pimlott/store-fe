import * as React from "react";
import { IProduct } from "../../types";

import InlineProduct from "../lib/inlineProduct";

interface IProps {
    basket: IProduct[];
}

function BasketProducts({ basket }: IProps) {
    return (
        <div style={{ backgroundColor: "white" }}>
            {basket?.map((basketItem, idx) => (
                <InlineProduct
                    key={idx}
                    idx={idx}
                    product={basketItem}
                />
            ))}
        </div>
    );
}

export default BasketProducts;
