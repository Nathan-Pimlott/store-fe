import * as React from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import BannerStore from "../../stores/banner";
import { Close } from "@material-ui/icons";

interface IProps {
    open: boolean;
    onClose: any;
    message: string;
}

function Banner({ open, onClose, message }: IProps) {
    const bannerStore = React.useContext(BannerStore);

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
            message={message}
            action={
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={onClose}
                >
                    <Close fontSize="small" />
                </IconButton>
            }
        />
    );
}

export default Banner;
