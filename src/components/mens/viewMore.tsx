import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import * as React from "react";
import { useParams } from "react-router";

import Classes from "../../styles";

function MensFilters() {
    const classes = Classes();

    const { page } = useParams();
    const { PRODUCTS_PER_PAGE } = process.env;

    const viewing = page * parseInt(PRODUCTS_PER_PAGE);

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h6" color="primary">
                Viewing {viewing} of 1,000,000 products
            </Typography>

            <Button>View more</Button>
        </div>
    );
}

export default MensFilters;
