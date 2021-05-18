import * as React from "react";
import * as ReactDOM from "react-dom";
import Routes from "./routes";
import "./index.scss";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { observer } from "mobx-react-lite";

import BasketStore from "./stores/basket";
import ProductStore from "./stores/product";
import AuthStore from "./stores/auth";
import Banner from "./components/core/banner";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#262626",
        },
        secondary: {
            main: "#96bd2b",
        },
    },
    typography: {
        fontFamily: "KoHo",
    },
});

const BannerWrapper = observer(() => {
    const basketStore = React.useContext(BasketStore);
    const productStore = React.useContext(ProductStore);
    const authStore = React.useContext(AuthStore);

    return (
        <React.Fragment>
            {/* BASKET STORE BANNER */}
            <Banner
                open={basketStore.showBanner}
                onClose={basketStore.hideBanner}
                message={basketStore.bannerMessage}
            />
            {/* PRODUCT STORE BANNER */}
            <Banner
                open={productStore.showBanner}
                onClose={productStore.hideBanner}
                message={productStore.bannerMessage}
            />
            {/* AUTH STORE BANNER */}
            <Banner
                open={authStore.showBanner}
                onClose={authStore.hideBanner}
                message={authStore.bannerMessage}
            />
        </React.Fragment>
    );
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BannerWrapper />
        <Routes />
    </ThemeProvider>,
    document.getElementById("root")
);
