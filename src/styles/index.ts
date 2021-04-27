import { createUseStyles } from "react-jss";

import buttonStyles from "./components/button";

const authBackgroundImage = require("../assets/authWallpaper.jpg");

const primaryColor = "#536172";

const classes = createUseStyles({
    ...buttonStyles(primaryColor),
    largeMarginTop: {
        marginTop: 20,
    },
    // AUTH
    authOuterContainer: {
        width: "-webkit-fill-available",
        height: "-webkit-fill-available",
        display: "flex",
        backgroundImage: `url(${authBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    authInnerContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        minWidth: 400,
        maxWidth: 700,
        height: "auto",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
    },
    authLogo: {
        width: 100,
        height: "auto",
        margin: "0 auto",
        borderRadius: 50
    },
    authButton: {
        backgroundColor: "white !important",
        border: "1px solid lightgrey !important",
        boxShadow: "none !important",
        borderRadius: "5px !important",
        textTransform: "none !important",
    },
    registerLink: {
        color: "grey !important",
        textDecoration: "none !important",
        textAlign: "center !important",
        margin: 'auto !important'
    },
    registerTitle: {
        textAlign: "center",
    },
    // AUTH
    //
    // HEADER
    headerContainer: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: `${primaryColor} !important`,
    },
    headerMenuButton: {
        marginRight: 20,
    },
    headerTitle: {
        flex: "none",
        color: "white !important",
        cursor: "pointer",
    },
    headerOptionsContainer: {
        flex: 1,
        padding: "0 10px",
        display: "flex",
        flexDirection: "row",
    },
    headerOption: {
        flex: 1,
        textAlign: "center",
        cursor: "pointer",
        color: "white !important",
    },
    headerIcon: {
        height: 40,
        width: "auto",
        borderRadius: "50%",
        marginRight: 20,
        color: "white !important",
    },
    // HEADER
    //
    // PRODUCT
    productImage: {
        height: 60,
        width: "auto",
        borderRadius: 3,
    },
    productTileOuterContainer: {
        display: "grid",
        gridGap: "1px",
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    productTileInnerContainer: {
        textAlign: "center !important",
        padding: 10,
    },
    productTileCard: {
        boxShadow: "none !important",
        border: "1px solid lightgrey !important",
    },
    // PRODUCT
    //
    // PAGE
    pageTitle: {
        textAlign: "center !important",
        margin: "50px 0 !important",
        fontWeight: "bold !important",
    },
    // PAGE
    //
    errorMessage: {
        color: "red !important",
        fontSize: "12px !important",
        fontWeight: "bold !important",
    },
    fieldLabel: {
        fontSize: '14px !important',
        color: 'grey !important'
    },
});

export default classes;
