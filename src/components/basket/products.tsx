import { Typography } from "@material-ui/core";
import * as React from "react";
import * as _ from "lodash";
import { IProduct } from "../../types";

import InlineProduct from "./inlineProduct";

interface IProps {
    basket: IProduct[];
}

function BasketProducts({ basket }: IProps) {
    return (
        <React.Fragment>
            {basket?.length > 0 ? (
                <div style={{ backgroundColor: "white" }}>
                    {basket?.map((basketItem, idx) => (
                        <InlineProduct
                            key={idx}
                            idx={idx}
                            product={basketItem}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: "center", padding: 50 }}>
                    <Typography variant="h6">
                        Your basket is empty :(
                    </Typography>
                </div>
            )}
        </React.Fragment>
    );
}

export default BasketProducts;
