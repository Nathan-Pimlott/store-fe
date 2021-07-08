import { Typography } from "@material-ui/core";
import * as React from "react";
import classnames from "classnames";

import Classes from "../../styles";

function MensHeader() {
    const classes = Classes();

    return (
        <Typography
            style={{ backgroundColor: "white" }}
            className={classes.basketTitleContainer}
            variant="h3"
            id="mens-title"
        >
            Mens
        </Typography>
    );
}

export default MensHeader;
