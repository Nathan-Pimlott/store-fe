import * as React from "react";
import * as ReactDOM from "react-dom";
import Routes from "./routes";
import './index.scss';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#2ea5f0',
        },
        secondary: {
          main: '#11cb5f',
        },
      },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>,
    document.getElementById("root")
);
