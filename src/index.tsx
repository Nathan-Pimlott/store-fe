import * as React from "react";
import * as ReactDOM from "react-dom";
import Routes from "./routes";
import "./index.scss";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#262626",
        },
        secondary: {
            main: "#96bd2b",
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>,
    document.getElementById("root")
);
