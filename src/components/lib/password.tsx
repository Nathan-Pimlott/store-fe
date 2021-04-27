import * as React from "react";
import {
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface IProps {
    classes: any;
    onChange: any;
    showError: boolean;
    errorMessage: string;
    showPassword: boolean;
    toggleShowPassword: any;
    confirm?: boolean
}

export const Password = (props: IProps) => {
    let fieldName = props.confirm ? 'confirmPassword' : 'password';    

    return (
        <React.Fragment>
            <div className={props.classes.largeMarginTop} />

            <InputLabel className={props.classes.fieldLabel} htmlFor={fieldName}>
                {props.confirm && 'Confirm '}Password
            </InputLabel>

            <Input
                id={fieldName}
                type={props.showPassword ? "text" : "password"}
                name={fieldName}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={props.toggleShowPassword}
                        >
                            {props.showPassword ? (
                                <Visibility />
                            ) : (
                                <VisibilityOff />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
            />

            <Typography className={props.classes.errorMessage}>
                {props.showError && props.errorMessage}
            </Typography>
        </React.Fragment>
    );
}
