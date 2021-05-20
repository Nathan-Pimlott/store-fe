import * as React from "react";
import { Button, InputLabel, Typography, Link } from "@material-ui/core";
import { Formik } from "formik";
import classnames from "classnames";

import AuthStore from "../../../stores/auth";
import Classes from "../../../styles";
import { validateRegister } from "../../../services/validation/auth";
import { Email, Password, TextField } from "../../lib";
import { IRegisterProps } from "src/types";

const Logo = require("../../../assets/shenron.png");

export default function () {
    const authStore = React.useContext(AuthStore);
    const classes = Classes();

    const [state, setState] = React.useState({
        showPassword: false,
        showConfirmPassword: false,
    });

    const register = async (values: IRegisterProps) => {
        console.log("Values: ", values);

        return await authStore.register(values);
    };

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                forename: "",
                surname: "",
            }}
            validate={validateRegister}
            onSubmit={register}
        >
            {({
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <div className={classes.authOuterContainer}>
                    <form
                        onSubmit={handleSubmit}
                        className={classes.authInnerContainer}
                    >
                        <img src={Logo} className={classes.authLogo} />

                        <div className={classes.largeMarginTop} />

                        <Typography
                            variant="h4"
                            className={classes.registerTitle}
                        >
                            Create An Account
                        </Typography>

                        <Email
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.email && touched.email}
                            errorMessage={errors.email}
                        />

                        <Password
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.password && touched.password}
                            errorMessage={errors.password}
                            showPassword={state.showPassword}
                            toggleShowPassword={() => {
                                setState({
                                    ...state,
                                    showPassword: !state.showPassword,
                                });
                            }}
                        />

                        <Password
                            classes={classes}
                            onChange={handleChange}
                            showError={
                                errors.confirmPassword &&
                                touched.confirmPassword
                            }
                            errorMessage={errors.confirmPassword}
                            showPassword={state.showConfirmPassword}
                            toggleShowPassword={() => {
                                setState({
                                    ...state,
                                    showConfirmPassword:
                                        !state.showConfirmPassword,
                                });
                            }}
                            confirm={true}
                        />

                        <TextField
                            classes={classes}
                            fieldName="forename"
                            label="Forename"
                            onChange={handleChange}
                            showError={errors.forename && touched.forename}
                            errorMessage={errors.forename}
                        />

                        <TextField
                            classes={classes}
                            fieldName="surname"
                            label="Surname"
                            onChange={handleChange}
                            showError={errors.surname && touched.surname}
                            errorMessage={errors.surname}
                        />

                        <div className={classes.largeMarginTop} />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Register
                        </Button>

                        <div className={classes.largeMarginTop} />

                        <Link
                            variant="body2"
                            href="/#/"
                            className={classnames(
                                classes.registerLink,
                                "auth-link"
                            )}
                        >
                            Already have an account? Login here
                        </Link>
                    </form>
                </div>
            )}
        </Formik>
    );
}
