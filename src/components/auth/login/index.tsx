import * as React from "react";
import { Button, Typography, Link, LinearProgress } from "@material-ui/core";
import { Formik } from "formik";
import classnames from "classnames";
import { observer } from "mobx-react-lite";

import AuthStore from "../../../stores/auth";
import Classes from "../../../styles";
import { validateLogin } from "../../../services/validation/auth";
import { ILoginProps } from "../../../types";
import { TextField } from "../../lib";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Logo = require("../../../assets/shenron.png");

const Login = () => {
    const authStore = React.useContext(AuthStore);
    const classes = Classes();

    const [state, setState] = React.useState({
        showPassword: false,
    });

    const login = async ({ email, password }: ILoginProps) =>
        await authStore.authenticate(email, password);

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validate={validateLogin}
            onSubmit={login}
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

                        <TextField
                            id="login-email"
                            fieldName="email"
                            label="Email address"
                            classes={classes}
                            onChange={handleChange}
                            showError={errors.email && touched.email}
                            errorMessage={errors.email}
                        />

                        <TextField
                            id="login-password"
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
                            type={state.showPassword ? "test" : "password"}
                            icon={
                                state.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )
                            }
                        />

                        {(isSubmitting || authStore.processing) && (
                            <React.Fragment>
                                <div className={classes.largeMarginTop} />
                                <LinearProgress />
                            </React.Fragment>
                        )}

                        {authStore.error && (
                            <React.Fragment>
                                <div className={classes.largeMarginTop} />
                                <Typography
                                    id="login-error"
                                    variant="body1"
                                    className={classes.errorMessage}
                                >
                                    {authStore.error}
                                </Typography>
                            </React.Fragment>
                        )}

                        <div className={classes.largeMarginTop} />

                        <Button
                            id="login-button"
                            type="submit"
                            disabled={isSubmitting}
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Login
                        </Button>

                        <div className={classes.largeMarginTop} />

                        <Link
                            variant="body2"
                            href="/#/register"
                            className={classnames(
                                classes.registerLink,
                                "auth-link"
                            )}
                            id="login-register-link"
                        >
                            Need an account? Register here
                        </Link>
                    </form>
                </div>
            )}
        </Formik>
    );
};

export default observer(Login);
