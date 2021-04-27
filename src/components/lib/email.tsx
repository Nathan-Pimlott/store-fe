import * as React from "react";
import { InputLabel, TextField, Typography } from "@material-ui/core";

interface IProps {
    classes: any;
    onChange: any;
    showError: boolean;
    errorMessage: string;
}

export const Email = (props: IProps) => {
    return (
        <React.Fragment>
            <div className={props.classes.largeMarginTop} />

            <InputLabel className={props.classes.fieldLabel} htmlFor="email">
                Email Address
            </InputLabel>

            <TextField
                id="email"
                type="email"
                name="email"
                onChange={props.onChange}
            />

            <Typography className={props.classes.errorMessage}>
                {props.showError && props.errorMessage}
            </Typography>
        </React.Fragment>
    );
};
