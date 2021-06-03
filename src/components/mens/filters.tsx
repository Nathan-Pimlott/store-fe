import {
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import * as React from "react";

import Classes from "../../styles";

interface IProps {
    state: any;
    setState: any;
}

const filters = {
    colors: [
        { value: "red", label: "Red" },
        { value: "white", label: "White" },
        { value: "yellow", label: "Yellow" },
    ],
    sizes: [
        { value: "xs", label: "Extra Small" },
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
        { value: "xl", label: "Extra Large" },
    ],
};

function MensFilters({ state, setState }: IProps) {
    const classes = Classes();

    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h6" color="primary">
                Filter results
            </Typography>

            <div style={{ display: "flex", marginTop: 10 }}>
                <div style={{ minWidth: 250, maxWidth: 300 }}>
                    <InputLabel id="mens-size">Size</InputLabel>
                    <Select
                        labelId="mens-size"
                        id="mens-size"
                        style={{ minWidth: 250, maxWidth: 300 }}
                        inputProps={{
                            name: "size",
                            id: "mens-size",
                        }}
                        value={state.size}
                        onChange={(e) =>
                            setState({
                                ...state,
                                size: e.target.value,
                            })
                        }
                    >
                        {filters.sizes.map((size, idx) => (
                            <MenuItem value={size.value} key={idx}>
                                {size.label}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                <div style={{ minWidth: 250, maxWidth: 300, marginLeft: 20 }}>
                    <InputLabel id="mens-colour">Colour</InputLabel>
                    <Select
                        labelId="mens-colour"
                        id="mens-colour"
                        value={state.color}
                        style={{ minWidth: 250, maxWidth: 300 }}
                        onChange={(e) =>
                            setState({
                                ...state,
                                color: e.target.value,
                            })
                        }
                    >
                        {filters.colors.map((color, idx) => (
                            <MenuItem value={color.value} key={idx}>
                                {color.label}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default MensFilters;
