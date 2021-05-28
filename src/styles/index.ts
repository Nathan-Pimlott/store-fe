import { createUseStyles } from "react-jss";

import buttonStyles from "./components/button";

const authBackgroundImage = require("../assets/authWallpaper.jpg");

const primaryColor = "#536172";

const classes = createUseStyles({
    ...buttonStyles(primaryColor),
    largeMarginTop: {
        marginTop: 20,
    },
    border: {
        borderTop: "1px solid lightgrey !important;",
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
        borderRadius: 50,
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
        margin: "auto !important",
    },
    registerTitle: {
        textAlign: "center",
    },
    // AUTH
    //
    // HEADER
    headerContainer: {
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
    headerFirstButton: {
        color: "white !important",
        backgroundColor: "none !important",
        borderLeft: "1px solid white !important",
        borderRight: "1px solid white !important",
        borderRadius: "0 !important",
        padding: "6px 15px !important",
        marginLeft: "20px !important",
    },
    headerLastButton: {
        color: "white !important",
        backgroundColor: "none !important",
        borderRight: "1px solid white !important",
        borderRadius: "0 !important",
        padding: "6px 15px !important",
        marginRight: "20px !important",
    },
    headerSearchContainer: {
        flex: 1,
        display: "flex !important",
        flexDirection: "row !important",
        backgroundColor: "white !important",
        borderRadius: "50px !important",
        margin: "0px 20px !important",
        height: "45px !important",
        padding: "0 20px !important",
    },
    headerSearchField: {
        flex: "1 !important",
        color: "black !important",
        border: "none !important",
        "&:before": {
            border: "none !important",
        },
        "&:after": {
            border: "none !important",
        },
        "&:hover": {
            border: "none !important",
        },
    },
    headerSearchIcon: {
        color: "black !important",
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
    productContainer: {
        display: "flex",
        flexDirection: "row",
        padding: "20px",
    },
    productBorder: {
        borderTop: "1px solid lightgrey !important",
    },
    productTileInnerContainer: {
        textAlign: "center !important",
        padding: 10,
        maxWidth: 250,
        margin: "auto",
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
    // BASKET
    basketSubTitle: {
        fontWeight: "700 !important",
        textAlign: "center",
    },
    basketTitleContainer: {
        fontWeight: "200 !important",
        padding: 50,
    },
    basketTotalContainer: {
        padding: 20,
    },
    basketProductImage: {
        height: 100,
        width: "auto",
    },
    basketProductDetails: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
    },
    basketProductTitle: {
        fontWeight: "bold",
        flex: 1,
    },
    basketRemoveProductContainer: {
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
    },
    basketRemoveProductButton: {
        margin: "auto !important",
    },
    basketRemoveProductIcon: {
        color: "red",
    },
    // BASKET
    //
    errorMessage: {
        color: "red !important",
        fontSize: "12px !important",
        fontWeight: "bold !important",
    },
    fieldLabel: {
        fontSize: "14px !important",
        color: "grey !important",
    },
});

export default classes;
