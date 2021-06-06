import * as React from "react";
import {
    InputLabel,
    Input,
    Typography,
    InputAdornment,
    IconButton,
} from "@material-ui/core";

interface IProps {
    // Cypress field name
    id: string;
    // Formik field name
    fieldName: string;
    label: string;
    classes: any;
    onChange: any;
    showError?: boolean;
    errorMessage?: string;
    type?: string;
    icon?: any;
    iconPosition?: "start" | "end";
    onIconClick?: any;
}

export const TextField = (props: IProps) => {
    return (
        <React.Fragment>
            <div className={props.classes.largeMarginTop} />

            <InputLabel
                id={`${props.id}-label`}
                className={props.classes.fieldLabel}
                htmlFor={props.fieldName}
            >
                {props.label}
            </InputLabel>

            <Input
                id={props.id}
                name={props.fieldName}
                onChange={props.onChange}
                type={props.type || "text"}
                endAdornment={
                    props.icon ? (
                        <InputAdornment position={props.iconPosition}>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={props.onIconClick}
                            >
                                {props.icon}
                            </IconButton>
                        </InputAdornment>
                    ) : null
                }
            />

            <Typography
                id={`${props.id}-error`}
                className={props.classes.errorMessage}
            >
                {props.showError && props.errorMessage}
            </Typography>
        </React.Fragment>
    );
};
