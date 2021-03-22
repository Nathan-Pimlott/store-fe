import * as React from 'react';
import { TextField, Button } from '@material-ui/core';

import AuthStore from '../../stores/auth';
import Classes from '../../styles'

const Logo = require('../../assets/logo.png');

export default function () {
    const authStore = React.useContext(AuthStore);
    const classes = Classes();

    const [state, setState] = React.useState({
        email: '',
        password: ''
    });

    const login = () => {
        authStore.authenticate(state.email, state.password);
    };

    return (
        <div className={classes.authOuterContainer}>
            <div className={classes.authInnerContainer}>
                <img
                    src={Logo}
                    className={classes.authLogo}
                />

                <div className={classes.largeMarginTop} />

                <TextField
                    label="Email"
                    value={state.email}
                    onChange={(e) => {
                        setState({
                            ...state,
                            email: e.target.value
                        })
                    }}
                />

                <div className={classes.largeMarginTop} />

                <TextField
                    label="Password"
                    value={state.password}
                    onChange={(e) => {
                        setState({
                            ...state,
                            password: e.target.value
                        })
                    }}
                />

                <div className={classes.largeMarginTop} />

                <Button
                    color='primary'
                    onClick={login}
                    fullWidth
                    variant='contained'
                >
                    Hello World
                </Button>
            </div>
        </div>
    )
}