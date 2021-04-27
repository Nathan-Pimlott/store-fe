import * as React from "react";
import { InputLabel, TextField as Tf, Typography } from "@material-ui/core";

interface IProps {
    fieldName: string;
    label: string;
    classes: any;
    onChange: any;
    showError: boolean;
    errorMessage: string;
}

export const TextField = (props: IProps) => {
    return (
        <React.Fragment>
            <div className={props.classes.largeMarginTop} />

            <InputLabel
                className={props.classes.fieldLabel}
                htmlFor={props.fieldName}
            >
                {props.label}
            </InputLabel>

            <Tf
                id={props.fieldName}
                name={props.fieldName}
                onChange={props.onChange}
            />

            <Typography className={props.classes.errorMessage}>
                {props.showError && props.errorMessage}
            </Typography>
        </React.Fragment>
    );
};
