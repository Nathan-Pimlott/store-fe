import * as React from "react";
import {
    Button,
    Typography,
    Link,
    LinearProgress,
} from "@material-ui/core";
import { Formik } from "formik";
import classnames from "classnames";

import AuthStore from "../../../stores/auth";
import Classes from "../../../styles";
import { observer } from "mobx-react-lite";
import { validateLogin } from "../../../services/validation/auth";
import { ILoginProps } from "../../../types";
import { Email, Password } from "../../lib";

const Logo = require("../../../assets/shenron.png");

const Login = () => {
    const authStore = React.useContext(AuthStore);
    const classes = Classes();

    const [state, setState] = React.useState({
        showPassword: false,
    });

    const login = async ({ email, password }: ILoginProps) => {
        return await authStore.authenticate(email, password);
    };

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
                                    variant="body1"
                                    className={classes.errorMessage}
                                >
                                    {authStore.error}
                                </Typography>
                            </React.Fragment>
                        )}

                        <div className={classes.largeMarginTop} />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            fullWidth
                            variant="contained"
                            className={
                                classnames(
                                    'auth-button',
                                    classes.authButton
                                )
                            }
                        >
                            Login
                        </Button>

                        <div className={classes.largeMarginTop} />

                        <Link
                            variant="body2"
                            href="/register"
                            className={
                                classnames(
                                    classes.registerLink,
                                    'auth-link'
                                )
                            }
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
