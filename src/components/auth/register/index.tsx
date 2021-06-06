import * as React from "react";
import { Button, InputLabel, Typography, Link } from "@material-ui/core";
import { Formik } from "formik";
import classnames from "classnames";

import AuthStore from "../../../stores/auth";
import Classes from "../../../styles";
import { validateRegister } from "../../../services/validation/auth";
import { TextField } from "../../lib";
import { IRegisterProps } from "src/types";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Logo = require("../../../assets/shenron.png");

export default function () {
    const authStore = React.useContext(AuthStore);
    const classes = Classes();

    const [state, setState] = React.useState({
        showPassword: false,
        showConfirmPassword: false,
    });

    const register = async (values: IRegisterProps) =>
        await authStore.register(values);

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

                        <TextField
                            id="register-email"
                            fieldName="email"
                            label="Email address"
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.email && touched.email}
                            errorMessage={errors.email}
                        />

                        <TextField
                            id="register-password"
                            fieldName="password"
                            label="Password"
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.password && touched.password}
                            errorMessage={errors.password}
                            onIconClick={() => {
                                setState({
                                    ...state,
                                    showPassword: !state.showPassword,
                                });
                            }}
                            iconPosition="end"
                            icon={
                                state.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )
                            }
                        />

                        <TextField
                            id="register-confirm-password"
                            fieldName="confirmPassword"
                            label="Confirm password"
                            classes={classes}
                            onChange={handleChange}
                            showError={
                                errors.confirmPassword &&
                                touched.confirmPassword
                            }
                            errorMessage={errors.confirmPassword}
                            onIconClick={() => {
                                setState({
                                    ...state,
                                    showConfirmPassword: !state.showPassword,
                                });
                            }}
                            iconPosition="end"
                            icon={
                                state.showConfirmPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )
                            }
                        />

                        <TextField
                            id="register-forename"
                            fieldName="forename"
                            label="Forename"
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.forename && touched.forename}
                            errorMessage={errors.forename}
                        />

                        <TextField
                            id="register-surname"
                            fieldName="surname"
                            label="Surname"
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.surname && touched.surname}
                            errorMessage={errors.surname}
                        />

                        <div className={classes.largeMarginTop} />

                        <Button
                            id="register-button"
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
                            id="register-login-link"
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
