import { createUseStyles } from 'react-jss'

import buttonStyles from './components/button';

const authBackgroundImage = require('../assets/authWallpaper.jpg')

const primaryColor = '#536172';

const classes = createUseStyles({
    ...buttonStyles(primaryColor),
    largeMarginTop: {
        marginTop: 20
    },
    // AUTH
    authOuterContainer: {
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        display: 'flex',
        backgroundImage: `url(${authBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    authInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        minWidth: 400,
        maxWidth: 700,
        height: 'auto',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    authLogo: {
        width: 100,
        height: 'auto',
        margin: '0 auto'
    },
    // AUTH
    // HEADER
    headerContainer: {
        flexGrow: 1
    },
    headerMenuButton: {
        marginRight: 20,
    },
    headerTitle: {
        flexGrow: 1,
    },
    headerIcon: {
        height: 40,
        width: 'auto',
        borderRadius: '50%',
        marginRight: 20
    }
    // HEADER
});

export default classes;