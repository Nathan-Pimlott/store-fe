import * as React from "react";
import { Button, Typography } from "@material-ui/core";

import Classes from "../../styles";
import { convertToCurrency } from "../../utils";
import { IProduct } from "../../types";

interface IProps {
    basket: IProduct[];
}

const paymentTypes: string[] = ["visa", "paypal", "amex"];

function BasketTotal({ basket }: IProps) {
    const classes = Classes();

    const basketTotal: number = basket
        ? basket?.reduce((a, b) => a + b.quantity * b.price, 0)
        : 0;

    const shipping: number = 3.99;

    const total = basketTotal + shipping;

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className={classes.basketTotalContainer}>
                <Typography variant="h6" className={classes.basketSubTitle}>
                    Total
                </Typography>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                    }}
                >
                    <Typography style={{ flex: 1, fontWeight: "bold" }}>
                        Sub total
                    </Typography>
                    <Typography style={{ flex: 1, textAlign: "right" }}>
                        {convertToCurrency(basketTotal)}
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        marginTop: 10,
                    }}
                >
                    <Typography style={{ flex: 1, fontWeight: "bold" }}>
                        Shipping
                    </Typography>
                    <Typography style={{ flex: 1, textAlign: "right" }}>
                        {convertToCurrency(shipping)}
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        marginTop: 10,
                    }}
                >
                    <Typography style={{ flex: 1, fontWeight: "bold" }}>
                        Total
                    </Typography>
                    <Typography style={{ flex: 1, textAlign: "right" }}>
                        {convertToCurrency(total)}
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

                <Typography
                    variant="body2"
                    style={{ marginTop: 20, textAlign: "center" }}
                >
                    We accept these payment methods.
                </Typography>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                        marginTop: 10,
                    }}
                >
                    {paymentTypes.map((paymentType, idx) => (
                        <div key={idx} style={{ flex: 1, display: "flex" }}>
                            <img
                                src={require(`../../assets/payment/${paymentType}.jpeg`)}
                                alt={paymentType}
                                style={{
                                    height: 25,
                                    width: "auto",
                                    margin: "auto",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BasketTotal;
