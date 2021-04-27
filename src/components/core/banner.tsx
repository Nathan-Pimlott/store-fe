import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import BannerStore from '../../stores/banner';

const Banner = () => {
    const bannerStore = React.useContext(BannerStore);

    return (
        <Snackbar 
            open={bannerStore.open} 
            autoHideDuration={3000} 
            onClose={bannerStore.hideBanner}
        >
            <MuiAlert
                onClose={bannerStore.hideBanner} 
                severity={bannerStore.bannerType}
            >
                {bannerStore.message}
            </MuiAlert>
      </Snackbar>
    )
}

export default Banner;