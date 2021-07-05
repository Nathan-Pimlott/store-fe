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
    filters: any;
    setFilters: (fieldName: string, value: string) => void;
}

const options = {
    colors: [
        { value: "", label: "Any" },
        { value: "red", label: "Red" },
        { value: "white", label: "White" },
        { value: "yellow", label: "Yellow" },
    ],
    sizes: [
        { value: "", label: "Any" },
        { value: "xs", label: "Extra Small" },
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
        { value: "xl", label: "Extra Large" },
    ],
};

function MensFilters({ filters, setFilters }: IProps) {
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
                        value={filters.size}
                        onChange={(e) =>
                            setFilters("size", e.target.value as string)
                        }
                    >
                        {options.sizes.map((size, idx) => (
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
                        value={filters.color}
                        style={{ minWidth: 250, maxWidth: 300 }}
                        onChange={(e) =>
                            setFilters("color", e.target.value as string)
                        }
                    >
                        {options.colors.map((color, idx) => (
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
