import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    AccountCircle
} from '@material-ui/icons';

import AuthStore from '../stores/auth';
import Classes from '../styles';

const Logo = require('../assets/logo.png');

export default () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const authStore = React.useContext(AuthStore);

    const classes = Classes();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signedIn = !!authStore.user?.email;

    return (
        <div className={classes.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.headerMenuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} className={classes.headerIcon} />
                    <Typography variant="h6" className={classes.headerTitle}>
                        Store FE
                    </Typography>
                    {signedIn && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={authStore.logout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}