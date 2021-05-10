import * as React from "react";
import { Button, Typography } from "@material-ui/core";

import Classes from "../../styles";
import { convertToCurrency } from "../../utils";
import { IProduct } from "../../types";

interface IProps {
    basket: IProduct[];
}

function BasketTotal({ basket }: IProps) {
    const classes = Classes();

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className={classes.basketTotalContainer}>
                <Typography
                    variant="h6"
                    className={classes.basketSubTitle}
                >
                    Total
                </Typography>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                    }}
                >
                    <Typography
                        style={{ flex: 1, fontWeight: "bold" }}
                    >
                        Sub total
                    </Typography>
                    <Typography
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        {convertToCurrency(
                            basket?.reduce(
                                (a, b) => a + b.price,
                                0
                            ) || 0
                        )}
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        marginTop: 10,
                    }}
                >
                    <Typography
                        style={{ flex: 1, fontWeight: "bold" }}
                    >
                        Shipping
                    </Typography>
                    <Typography
                        style={{ flex: 1, textAlign: "right" }}
                    >
                        {convertToCurrency(3.99)}
                    </Typography>
                </div>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 20 }}
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default BasketTotal;
