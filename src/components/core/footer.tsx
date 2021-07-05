import React from "react";
import { Typography } from "@material-ui/core";

interface IProps {
    classes: any;
}

function Footer({ classes }: IProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                backgroundColor: "white",
            }}
        >
            <div style={{ flex: 1 }}>
                <Typography style={{ fontWeight: "bold" }}>About us</Typography>

                <Typography style={{ marginTop: 20 }}>Work for us</Typography>

                <Typography style={{ marginTop: 10 }}>About us</Typography>

                <Typography style={{ marginTop: 10 }}>Your security</Typography>
            </div>
            <div style={{ flex: 1 }}>
                <Typography style={{ fontWeight: "bold" }}>Help</Typography>

                <Typography style={{ marginTop: 20 }}>
                    Track your order
                </Typography>

                <Typography style={{ marginTop: 10 }}>
                    Shipping information
                </Typography>

                <Typography style={{ marginTop: 10 }}>Returns</Typography>

                <Typography style={{ marginTop: 10 }}>
                    Student discount
                </Typography>
            </div>
            <div style={{ flex: 1 }}>
                <Typography style={{ fontWeight: "bold" }}>
                    More from us
                </Typography>

                <Typography style={{ marginTop: 20 }}>
                    Our mobile app
                </Typography>

                <Typography style={{ marginTop: 10 }}>Gift vouchers</Typography>

                <Typography style={{ marginTop: 10 }}>
                    Seasonal sales
                </Typography>
            </div>
        </div>
    );
}

export default Footer;
