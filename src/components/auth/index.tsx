import * as React from 'react';
import { TextField, Button } from '@material-ui/core';

import AuthStore from '../../stores/auth';

const Logo = require('../../assets/logo.png');

export default function () {
    const authStore = React.useContext(AuthStore);

    const [state, setState] = React.useState({
        email: '',
        password: ''
    });

    const login = () => {
        authStore.authenticate(state.email, state.password);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                minWidth: 400,
                maxWidth: 700,
                height: 'auto',
                padding: 20,
                border: '1px solid lightgrey',
                borderRadius: 10
            }}
        >
            <img
                src={Logo}
                style={{
                    width: 120,
                    height: 'auto',
                    margin: '0 auto'
                }}
            />

            <div style={{ marginTop: 20 }} />

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

            <div style={{ marginTop: 20 }} />

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

            <div style={{ marginTop: 20 }} />

            <Button
                color='primary'
                onClick={login}
                fullWidth
                variant='contained'
            >
                Hello World
            </Button>
        </div>
    )
}