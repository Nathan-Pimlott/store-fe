import * as React from "react";
import { Button, ButtonGroup, Typography } from "@material-ui/core";

interface IProps {
    classes: any;
    onChange: any;
    value: number;
}

export const Quantity = (props: IProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonGroup size="large" color="primary">
                <Button onClick={() => props.onChange(props.value - 1)}>
                    -
                </Button>
                <div
                    style={{
                        border: "1px solid #909090",
                        borderRight: "none",
                        display: "flex",
                        cursor: "default",
                    }}
                >
                    <Typography style={{ margin: "auto" }}>
                        {props.value}
                    </Typography>
                </div>
                <Button onClick={() => props.onChange(props.value + 1)}>
                    +
                </Button>
            </ButtonGroup>
        </div>
    );
};
