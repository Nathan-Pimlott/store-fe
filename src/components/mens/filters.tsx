import { Grid, MenuItem, Select } from "@material-ui/core";
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
        <div>
            <Select
                variant="outlined"
                multiple
                value={state.size}
                onChange={(e) =>
                    setState({
                        ...state,
                        size: e.target.value,
                    })
                }
                label="Size"
                placeholder="Size"
            >
                {filters.sizes.map((size, idx) => {
                    <MenuItem value={size.value} key={idx}>
                        {size.label}
                    </MenuItem>;
                })}
            </Select>
            <Select
                variant="outlined"
                multiple
                value={state.color}
                onChange={(e) =>
                    setState({
                        ...state,
                        color: e.target.value,
                    })
                }
                label="Color"
                placeholder="Color"
            >
                {filters.colors.map((color, idx) => {
                    <MenuItem value={color.value} key={idx}>
                        {color.label}
                    </MenuItem>;
                })}
            </Select>
        </div>
    );
}

export default MensFilters;
